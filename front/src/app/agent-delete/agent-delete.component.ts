import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { AgentService, ResponseAgent, ResponsePage, Agent, Page } from '../agent.service'

@Component({
  selector: 'agent-delete',
  templateUrl: './agent-delete.component.html',
  styleUrls: ['./agent-delete.component.scss']
})
export class AgentDeleteComponent implements OnInit {

    @Input() agent: Agent
    @Output() update: EventEmitter<any> = new EventEmitter()

    form: FormGroup

    alertMessage: string = ""

    constructor(
        private formBuilder: FormBuilder,
        private agentService: AgentService
    ) { }


    onDeleteAgent() {
        this.update.emit(null);
    }

    deleteAgent(event) {
        var payload: Agent = {
                id: event.value.id,
        }
        this.agentService.deletex(payload).subscribe(
            (response: ResponseAgent) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onDeleteAgent()
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
        return "agent-delete-modal-" + this.agent.hostname
    }

    formId(base: string): string {
        return "agent-delete-form-" + base + "-" + this.agent.hostname
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
        this.form.patchValue({
            id: this.agent.id,
            hostname: this.agent.hostname,
            confirmation: false
        })
        const id = this.modalId()
        $('#' + id).modal('show')
    }

    dismissForm() {
        const id = this.modalId()
        $('#' + id).modal('hide')
        this.form.reset()
    }

    showAlert(message: string) {
        this.alertMessage = message
    }

    dismissAlert() {
        this.alertMessage = ""
    }

    get formHostname(){
       return this.form.get('hostname')
    }

    confirmationValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} | null => {
            const value = control.value
            if (value == null) {
                return { invalidConfirmation: "Invalid confirmation" }
            }
            if (value == false) {
                return { invalidConfirmation: "Invalid confirmation" }
            }
            return null
        };
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            id: -1,
            hostname: "",
            confirmation:  [ false, [ this.confirmationValidator() ] ]
        })
    }
}
