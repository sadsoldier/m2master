import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

import { DumpScheduleService, DumpSchedule, DumpScheduleResponse, DumpSchedulePage } from '../dump-schedule.service'

declare var $: any;


interface PaginatorItem {
    visibleNumber: number
    offset: number
    active: boolean
}

@Component({
    selector: 'dump-schedules',
    templateUrl: './dump-schedules.component.html',
    styleUrls: ['./dump-schedules.component.scss']
})
export class DumpSchedulesComponent implements OnInit {

    searchForm: FormGroup

    noticeMessage: string = null
    alertMessage: string = null

    page: DumpSchedulePage = {
        total: 0,
        limit: 5,
        offset: 0,
        hostnamePattern: "",
        dumpSchedules: []
    }

    constructor(
        private formBuilder: FormBuilder,
        private dumpScheduleService: DumpScheduleService
    ) { }

    setNewOffset(newOffset: any) {
        this.page.offset = newOffset
        this.list()
    }

    list() {
        this.dumpScheduleService.list(this.page).subscribe(
            (response: DumpScheduleResponse) => {
                if (response.error == false) {
                    this.page = response.result
                    if (this.page.dumpSchedules == null) {
                        this.page.dumpSchedules = []
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
