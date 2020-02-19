import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { ScheduleService, Schedule, SchedulePage, ScheduleResponse } from '../schedule.service'

import { AgentService, Agent, AgentAllResponse } from '../agent.service'
import { StoreService, Store, StoreAllResponse } from '../store.service'


@Component({
  selector: 'schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent implements OnInit {

    @Input() schedule: Schedule
    @Output() update : EventEmitter<any> = new EventEmitter()

    agents: Agent[]
    stores: Store[]

    form: FormGroup

    alertMessage: string = ""

    minLength: number = 1

    constructor(
        private formBuilder: FormBuilder,
        private scheduleService: ScheduleService,
        private agentService: AgentService,
        private storeService: StoreService
    ) { }

    onCreateSchedule() {
        this.update.emit(null);
    }

    getAgents() {
        this.agentService.listAll("").subscribe(
            (response: AgentAllResponse) => {
                if (response.error == false) {
                    this.agents = response.result
                    if (this.agents == null) {
                        this.agents = []
                    }
                } else {
                    if (response.message != null) {
                        this.alertMessage = "Backend error: " + response.message
                    } else {
                        this.alertMessage = "Backend error."
                    }
                }
            },
            (error) => {
                if (error.message != null) {
                    this.alertMessage = "Communication error: " + error.message
                } else {
                    this.alertMessage = "Communication error."
                }
            }
        )
    }

    getStores() {
        this.storeService.listAll("").subscribe(
            (response: StoreAllResponse) => {
                if (response.error == false) {
                    this.stores = response.result
                    if (this.stores == null) {
                        this.stores = []
                    }
                } else {
                    if (response.message != null) {
                        this.alertMessage = "Backend error: " + response.message
                    } else {
                        this.alertMessage = "Backend error."
                    }
                }
            },
            (error) => {
                if (error.message != null) {
                    this.alertMessage = "Communication error: " + error.message
                } else {
                    this.alertMessage = "Communication error."
                }
            }
        )
    }


    createSchedule(event) {
        var scheduleType = event.value.scheduleType

        var payload: Schedule = {
            agentId:    event.value.agentId,
            storeId:    event.value.storeId,
            actionType: event.value.actionType,
            storePath:  event.value.storePath,
            resourse:   event.value.resourse,
            mins:   event.value.mins,
            hours:  event.value.hours,
            mdays:  event.value.mdays,
            wdays:  event.value.wdays,
            depth:  event.value.depth
        }
        this.scheduleService.create(payload).subscribe(
            (response: ScheduleResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onCreateSchedule()
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
        return "schedule-create-modal"
    }

    formId(base: string): string {
        return "schedule-create-form-" + base
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
        this.getAgents()
        this.getStores()
        const id = this.modalId()
        $('#' + id).modal('show')
    }

    dismissForm() {
        const id = this.modalId()
        $('#' + id).modal('hide')
        this.form.reset()
    }

    get formAgentId(){
       return this.form.get('agentId')
    }

    get formStoreId(){
       return this.form.get('storeId')
    }

    showAlert(message: string) {
        this.alertMessage = message
    }

    dismissAlert() {
        this.alertMessage = ""
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            agentId:    [ 0, [ Validators.required ] ],
            storeId:    [ 0, [ Validators.required ] ],
            actionType: [ "", [ Validators.required ] ],
            storePath:  [ "", [ Validators.required, Validators.minLength(this.minLength) ] ],
            resourse:   [ "", [ Validators.required ] ],
            mins:       [ "", [ Validators.required, Validators.minLength(this.minLength) ] ],
            hours:      [ "", [ Validators.required, Validators.minLength(this.minLength) ] ],
            mdays:      [ "", [ Validators.required, Validators.minLength(this.minLength) ] ],
            wdays:      [ "", [ Validators.required, Validators.minLength(this.minLength) ] ],
            depth:      [  0, [ Validators.required ] ]
        })
    }
}
