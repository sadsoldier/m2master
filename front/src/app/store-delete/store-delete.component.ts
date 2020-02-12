import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms'

declare var $: any

import { StoreService, Store, StorePage, StoreResponse } from '../store.service'

@Component({
  selector: 'store-delete',
  templateUrl: './store-delete.component.html',
  styleUrls: ['./store-delete.component.scss']
})
export class StoreDeleteComponent implements OnInit {

    @Input() store: Store
    @Output() update: EventEmitter<any> = new EventEmitter()

    form: FormGroup

    alertMessage: string = ""

    constructor(
        private formBuilder: FormBuilder,
        private storeService: StoreService
    ) { }


    onDeleteStore() {
        this.update.emit(null);
    }

    deleteStore(event) {
        var payload: Store = {
                id: event.value.id,
        }
        this.storeService.deletex(payload).subscribe(
            (response: StoreResponse) => {
                if (response.error == false) {
                    this.dismissForm()
                    this.onDeleteStore()
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
        return "store-delete-modal-" + this.store.hostname
    }

    formId(base: string): string {
        return "store-delete-form-" + base + "-" + this.store.hostname
    }

    showForm() {
        this.alertMessage = ""
        this.form.reset()
        this.form.patchValue({
            id: this.store.id,
            hostname: this.store.hostname,
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
