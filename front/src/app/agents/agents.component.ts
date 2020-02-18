import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

import { AgentService, Agent, AgentResponse, AgentPage } from '../agent.service'

declare var $: any;


interface PaginatorItem {
    visibleNumber: number
    offset: number
    active: boolean
}

@Component({
    selector: 'agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

    searchForm: FormGroup

    noticeMessage: string = null
    alertMessage: string = null

    page: AgentPage = {
        total: 0,
        limit: 5,
        offset: 0,
        hostnamePattern: "",
        agents: []
    }

    constructor(
        private formBuilder: FormBuilder,
        private agentService: AgentService
    ) { }

    setNewOffset(newOffset: any) {
        this.page.offset = newOffset
        this.list()
    }

    list() {
        this.agentService.list(this.page).subscribe(
            (response: AgentResponse) => {
                if (response.error == false) {
                    this.page = response.result
                    if (this.page.agents == null) {
                        this.page.agents = []
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


    /* Alerts */
    showAlert(message: string) {
        this.alertMessage = message
    }
    dismissAlert() {
        this.alertMessage = null
    }

    /* Notices */
    showNotice(message: string) {
        this.noticeMessage = message
    }
    dismissNotice() {
        this.noticeMessage = null
    }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            hostnamePattern: [ "" ],
            pageLimit: [ this.page.limit ],
        })

        this.list()

        this.searchForm.get('hostnamePattern').valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(value => {
                this.page.hostnamePattern = value
                this.list()
            })

        this.searchForm.get('pageLimit').valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(value => {
                console.log(value)
                this.page.limit = value
                this.list()
            })
    }

}
