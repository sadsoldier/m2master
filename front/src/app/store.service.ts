import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Store {
    id?: number
    type?: string
    schema?: string
    hostname?: string
    port?: number
    username?: string
    password?: string
}

export interface Page {
    total?: number
    offset: number
    limit: number
    hostnamePattern: string
    stores: Store[]
}

export interface ResponseStore {
    error: boolean
    message: string
    result: Store[]
}

export interface ResponsePage {
    error: boolean
    message: string
    result: Page
}

@Injectable({
    providedIn: 'root'
})

export class StoreService {

    constructor(private httpClient: HttpClient) { }

    list(page: Page) {
        return this.httpClient.post<ResponsePage>(`/api/v1/store/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        })
    }

    create(store: Store) {
        return this.httpClient.post<ResponseStore>(`/api/v1/store/create`, {
            "type": store.type,
            "schema": store.schema,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        })
    }

    update(store: Store) {
        return this.httpClient.post<ResponseStore>(`/api/v1/store/update`, {
            "id": store.id,
            "type": store.type,
            "schema": store.schema,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        })
    }


    deletex(store: Store) {
        return this.httpClient.post<ResponseStore>(`/api/v1/store/delete`, {
            "id": store.id
        })
    }

}
