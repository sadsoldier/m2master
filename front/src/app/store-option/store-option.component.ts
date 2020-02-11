import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

declare var $: any

import { Store } from '../store.service'

@Component({
  selector: 'store-option',
  templateUrl: './store-option.component.html',
  styleUrls: ['./store-option.component.scss']
})
export class StoreOptionComponent implements OnInit {

    @Input() store: Store
    @Output() update: EventEmitter<any> = new EventEmitter()

    constructor() { }

    onUpdate() {
        console.log("event")
        this.update.emit(null)
        this.dismissForm()
    }


    modalId(): string {
        return "store-option-modal-" + this.store.hostname
    }

    showForm() {
        const id = this.modalId()
        $('#' + id).modal('show')
    }

    dismissForm() {
        const id = this.modalId()
        $('#' + id).modal('hide')
    }

    ngOnInit() {
    }
}
