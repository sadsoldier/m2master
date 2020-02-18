import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { AgentService, Agent, AgentResponse, AgentPage } from '../agent.service'

@Component({
  selector: 'agent-create',
  templateUrl: './agent-create.component.html',
  styleUrls: ['./agent-create.component.scss']
})
export class AgentCreateComponent implements OnInit {

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


    onCreateAgent() {
        this.update.emit(null);
    }

    createAgent(event) {
        var payload: Agent = {
                scheme: "https",
                hostname: event.value.hostname,
                username: event.value.username,
                port: 7002,
                password: event.value.password,
        }
        this.agentService.create(payload).subscribe(
            (response: AgentResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onCreateAgent()
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
        return "agent-create-modal"
    }

    formId(base: string): string {
        return "agent-create-form-" + base
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
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
       return this.form.get('username')
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

    ngOnInit() {
        this.form = this.formBuilder.group({
            hostname: [ "", [ Validators.required, Validators.minLength(this.minHostnameLength) ] ],
            username: [ "", [ Validators.required, Validators.minLength(this.minUsernameLength) ] ],
            password: [ "", [ Validators.required, Validators.minLength(this.minPasswordLength) ] ],
        })
    }
}
