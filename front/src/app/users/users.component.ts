import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

import { UserService, ResponseUser, ResponsePage, User, Page } from '../user.service'

declare var $: any;


interface PaginatorItem {
    visibleNumber: number
    offset: number
    active: boolean
}

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    createForm: FormGroup
    updateForm: FormGroup
    deleteForm: FormGroup

    searchForm: FormGroup

    noticeMessage: string = null
    alertMessage: string = null

    users: User[]

    page: Page = {
        total: 0,
        limit: 3,
        offset: 0,
        user_pattern: "",
        users: null
    }

    minUsernameLength: number = 5
    minPasswordLength: number = 5

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) { }

    setNewOffset(newOffset: any) {
        this.page.offset = newOffset
        this.list()
    }

    list() {
        this.userService.list(this.page).subscribe(
            (response: ResponsePage) => {
                if (response.error == false) {
                    this.page = response.result
                    this.paginate()
                }
            },
            (error) => {
                console.log(error)
                this.users = null
            }
        )
    }

    createUser(event) {
        var payload: User = {
                username: event.value.username,
                password: event.value.password
        }
        this.dismissCreateForm()
        this.userService.create(payload).subscribe(
            (response: ResponseUser) => {
                if (response.error == true) {
                    this.showAlert("Operation error")
                    return
                }
                this.showNotice("User created")
                this.list()
            },
            (error) => {
                this.showAlert("Connection error")
                console.log(error)
            }
        )
    }

    updateUser(event) {
        var payload: User = {
                id: event.value.id,
                username: event.value.username,
                password: event.value.password
        }
        this.dismissUpdateForm()

        this.userService.update(payload).subscribe(
            (response: ResponseUser) => {
                if (response.error == true) {
                    this.showAlert("Operation error")
                    return
                }
                this.showNotice("User updated")
                this.list()
            },
            (error) => {
                this.showAlert("Connection error")
                console.log(error)
            }
        )
    }

    deleteUser(event) {
        console.log(event)
        var payload: User = {
                id: event.value.id,
                username: event.value.username,
                password: event.value.password
        }
        console.log(payload)
        this.dismissDeleteForm()

        this.userService.deletex(payload).subscribe(
            (response: ResponseUser) => {
                if (response.error == true) {
                    this.showAlert("Operation error")
                    return
                }
                this.showNotice("User deleted")
                this.list()
            },
            (error) => {
                this.showAlert("Connection error")
                console.log(error)
            }
        )
    }


    /* Create form */
    showCreateForm() {
        $("#create-user").modal('show')
    }

    dismissCreateForm() {
        $("#create-user").modal('hide')
        this.createForm.reset()
    }

    get createFormUsername(){
       return this.createForm.get('username')
    }
    get createFormPassword(){
       return this.createForm.get('password')
    }

    /* Update form */
    showUpdateForm(item: User) {
        console.log(item)
        this.updateForm.reset()
        this.updateForm.patchValue({
            id: item.id,
            username: item.username,
            password: null
        })
        $("#update-user").modal('show')
    }

    dismissUpdateForm() {
        $("#update-user").modal('hide')
        this.updateForm.reset()
    }

    get updateFormUsername(){
       return this.updateForm.get('username')
    }
    get updateFormPassword(){
       return this.updateForm.get('password')
    }

    /* Delete form */
    showDeleteForm(item: User) {
        this.deleteForm.patchValue({
            id: item.id,
            username: item.username,
            password: null,
            confirmation: false
        })
        $("#delete-user").modal('show')
    }

    get deleteFormUsername(){
       return this.deleteForm.get('username')
    }

    get deleteFormAcceptTerm(){
       return this.deleteForm.get('acceptTerm')
    }

    dismissDeleteForm() {
        $("#delete-user").modal('hide')
        this.deleteForm.reset()
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

    /* Pagination */
    pageCount(total: number, limit: number): number {
        //console.log(total, limit)
        var pagesRaw: number= total/limit
        var pagesLow: number = Math.floor(pagesRaw)
        var pages: number = 0
        if (pagesRaw == pagesLow) {
            pages = pagesLow
        } else {
            pages = pagesLow + 1
        }
        return pages
    }

    resolvePageNumber(offset: number, limit: number, maxPage: number): number {
        var p: number = 0
        for (p = 0; p < maxPage; p++) {
            if (offset >= p * limit && offset < (p + 1) * limit) {
                return p
            }
        }
        return 0
    }

    currentPage: number = 0
    paginatorItems: PaginatorItem[]

    changePage(offset: number) {
        this.page.offset = offset
        this.list()
    }

    paginate() {
        var paginatorItems: PaginatorItem[] = []
        var pageCount = this.pageCount(this.page.total, this.page.limit)
        if (pageCount == 1) {
            this.page.offset = 0
        }
        this.currentPage = this.resolvePageNumber(this.page.offset, this.page.limit, pageCount)
        var i: number = 0

        for (i = 0; i < pageCount; i++) {
            if (i > this.currentPage - 4 && i < this.currentPage) {
                var item: PaginatorItem = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: false
                }
                paginatorItems.push(item)
            }
            if (i == this.currentPage) {
                var item: PaginatorItem = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: true
                }
                paginatorItems.push(item)
            }
            if (i > this.currentPage && i < this.currentPage + 4) {
                var item: PaginatorItem = {
                    visibleNumber: i + 1,
                    offset: i * this.page.limit,
                    active: false
                }
                paginatorItems.push(item)
            }
        }
        this.paginatorItems = paginatorItems
    }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            id: null,
            username: [ "", [ Validators.required, Validators.minLength(this.minUsernameLength)] ],
            password: [ "", [ Validators.required, Validators.minLength(this.minPasswordLength)] ]
        })
        this.updateForm = this.formBuilder.group({
            id: null,
            username: [ "", [ Validators.required, Validators.minLength(this.minUsernameLength)] ],
            password: [ "", [ Validators.required, Validators.minLength(this.minPasswordLength)] ]
        })
        this.deleteForm = this.formBuilder.group({
            id: null,
            username: [ "" ],
            password: [ "" ],
            confirmation: [ false, Validators.requiredTrue ]

        })
        this.searchForm = this.formBuilder.group({
            userPattern: [ "" ],
            pageLimit: [ "" ],
        })

        this.list()


        this.searchForm.get('userPattern').valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe(value => {
                this.page.user_pattern = value
                this.list()
            })

        this.searchForm.get('pageLimit').valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe(value => {
                console.log(value)
                this.page.limit = value
                this.list()
            })

    }

}
