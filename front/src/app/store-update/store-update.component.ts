import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { StoreService, Store, StorePage, StoreResponse } from '../store.service'

@Component({
  selector: 'store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.scss']
})
export class StoreUpdateComponent implements OnInit {

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


    onUpdateStore() {
        this.update.emit(null);
    }

    updateStore(event) {
        var payload: Store = {
                id: event.value.id,
                schema: "https",
                hostname: event.value.hostname,
                port: 7002,
                username: event.value.username,
                password: event.value.password,
        }
        this.storeService.update(payload).subscribe(
            (response: StoreResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onUpdateStore()
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
        return "store-update-modal-" + this.store.hostname
    }

    formId(base: string): string {
        return "store-update-form-" + base + "-" + this.store.hostname
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
        this.form.patchValue({
            id: this.store.id,
            hostname: this.store.hostname,
            username: this.store.username,
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
