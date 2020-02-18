import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { AgentService, Agent, AgentResponse, AgentPage } from '../agent.service'

@Component({
  selector: 'agent-update',
  templateUrl: './agent-update.component.html',
  styleUrls: ['./agent-update.component.scss']
})
export class AgentUpdateComponent implements OnInit {

    @Input() agent: Agent
    @Output() update : EventEmitter<any> = new EventEmitter()

    form: FormGroup

    alertMessage: string = ""

    minHostnameLength: number = 3
    minUsernameLength: number = 5
    minPasswordLength: number = 5

    constructor(
        private formBuilder: FormBuilder,
        private agentService: AgentService
    ) { }


    onUpdateAgent() {
        this.update.emit(null);
    }

    updateAgent(event) {
        var payload: Agent = {
                id: event.value.id,
                scheme: "https",
                hostname: event.value.hostname,
                port: 7002,
                username: event.value.username,
                password: event.value.password,
        }
        this.agentService.update(payload).subscribe(
            (response: AgentResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onUpdateAgent()
                    return
                }
                if (response.message != null) {
                    this.showAlert("Backend error: " + response.message)
                } else {
                    this.showAlert("Backend error.")
                }
            },
            (error) => {
                this.showAlert("Connection error: " + error.message)
            }
        )
    }

    modalId(): string {
        return "agent-update-modal-" + this.agent.hostname
    }

    formId(base: string): string {
        return "agent-update-form-" + base + "-" + this.agent.hostname
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
        this.form.patchValue({
            id: this.agent.id,
            hostname: this.agent.hostname,
            username: this.agent.username,
            password: ""
        })
        const id = this.modalId()
        $('#' + id).modal('show')
    }

    dismissForm() {
        const id = this.modalId()
        $('#' + id).modal('hide')
        this.form.reset()
    }

    get formHostname(){
       return this.form.get('hostname')
    }
    get formUsername(){
       return this.form.get('hostname')
    }
    get formPassword(){
       return this.form.get('password')
    }

    showAlert(message: string) {
        this.alertMessage = message
    }

    dismissAlert() {
        this.alertMessage = ""
    }

    passwordValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} | null => {
            const value = control.value
            if (value == null) {
                return null
            }
            if (value.length > 0 && value.length < this.minPasswordLength) {
                return { invalidPassword: "Password too short" }
            }
            return null
        };
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            id: null,
            hostname: [ "", [ Validators.required, Validators.minLength(this.minHostnameLength)] ],
            username: [ "", [ Validators.required, Validators.minLength(this.minUsernameLength)] ],
            password: [ "", [ this.passwordValidator() ] ]
        })
    }
}
