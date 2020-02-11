import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

declare var $: any

import { Agent } from '../agent.service'

@Component({
  selector: 'agent-option',
  templateUrl: './agent-option.component.html',
  styleUrls: ['./agent-option.component.scss']
})
export class AgentOptionComponent implements OnInit {

    @Input() agent: Agent
    @Output() update: EventEmitter<any> = new EventEmitter()

    constructor() { }

    onUpdate() {
        console.log("event")
        this.update.emit(null)
        this.dismissForm()
    }


    modalId(): string {
        return "agent-option-modal-" + this.agent.hostname
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
