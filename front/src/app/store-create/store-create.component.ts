import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { StoreService, Store, StorePage, StoreResponse } from '../store.service'


@Component({
  selector: 'store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.scss']
})
export class StoreCreateComponent implements OnInit {

    @Input() store: Store
    @Output() update : EventEmitter<any> = new EventEmitter()

    form: FormGroup

    alertMessage: string = ""

    minHostnameLength: number = 3
    minUsernameLength: number = 5
    minPasswordLength: number = 5

    constructor(
        private formBuilder: FormBuilder,
        private storeService: StoreService
    ) { }


    onCreateStore() {
        this.update.emit(null);
    }

    createStore(event) {
        var storeType = event.value.storeType

        var scheme
        if (storeType == "sftp") {
            scheme = "sftp"
        } else if (storeType == "s2") {
            scheme = "https"
        }

        var payload: Store = {
                storeType: event.value.storeType,
                scheme: scheme,
                hostname: event.value.hostname,
                username: event.value.username,
                port: Number(event.value.port),
                password: event.value.password,
        }
        this.storeService.create(payload).subscribe(
            (response: StoreResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onCreateStore()
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
        return "store-create-modal"
    }

    formId(base: string): string {
        return "store-create-form-" + base
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

    get formPort(){
       return this.form.get('port')
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
            storeType: [ "", [ Validators.required ] ],
            port: [ 0, [ Validators.required, Validators.min(1), Validators.max(65535) ] ],
            hostname: [ "", [ Validators.required, Validators.minLength(this.minHostnameLength) ] ],
            username: [ "", [ Validators.required, Validators.minLength(this.minUsernameLength) ] ],
            password: [ "", [ Validators.required, Validators.minLength(this.minPasswordLength) ] ],
        })
    }
}
