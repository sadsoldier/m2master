import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Store {
    id?: number
    storeType?: string
    scheme?: string
    hostname?: string
    port?: number
    username?: string
    password?: string
}

export interface StorePage {
    total?: number
    offset: number
    limit: number
    hostnamePattern: string
    stores: Store[]
}

export interface StoreResponse {
    error: boolean
    message: string
    result: StorePage
}

@Injectable({
    providedIn: 'root'
})

export class StoreService {

    constructor(private httpClient: HttpClient) { }

    list(page: StorePage) {
        return this.httpClient.post<StoreResponse>(`/api/v1/store/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        })
    }

    create(store: Store) {
        return this.httpClient.post<StoreResponse>(`/api/v1/store/create`, {
            "storeType": store.storeType,
            "scheme": store.scheme,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        })
    }

    update(store: Store) {
        return this.httpClient.post<StoreResponse>(`/api/v1/store/update`, {
            "id": store.id,
            "storeType": store.storeType,
            "scheme": store.scheme,
            "hostname": store.hostname,
            "port": store.port,
            "password": store.password,
            "username": store.username,
        })
    }


    deletex(store: Store) {
        return this.httpClient.post<StoreResponse>(`/api/v1/store/delete`, {
            "id": store.id
        })
    }

}
