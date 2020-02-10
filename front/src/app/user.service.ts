import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
    id?: number
    username?: string
    password?: string
    isadmin?: boolean
}

export interface Page {
    total?: number
    offset: number
    limit: number
    user_pattern: string
    users: User[]
}

export interface ResponseUser {
    error: boolean
    message: string
    result: User[]
}

export interface ResponsePage {
    error: boolean
    message: string
    result: Page
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient) { }

    list(page: Page) {
        return this.httpClient.post<ResponsePage>(`/api/v1/user/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "user_pattern": page.user_pattern
        })
    }


    check(username: string, password: string) {
        return this.httpClient.post<ResponseUser>(`/api/v1/user/login`, {
            "username": username,
            "password": password
        })
    }

    create(user: User) {
        return this.httpClient.post<ResponseUser>(`/api/v1/user/create`, {
            "username": user.username,
            "password": user.password,
            "isadmin": user.isadmin
        })
    }

    update(user: User) {
        return this.httpClient.post<ResponseUser>(`/api/v1/user/update`, {
            "id": user.id,
            "username": user.username,
            "password": user.password,
            "isadmin": user.isadmin
        })
    }


    deletex(user: User) {
        return this.httpClient.post<ResponseUser>(`/api/v1/user/delete`, {
            "id": user.id
        })
    }

}
