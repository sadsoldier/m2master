import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface Db {
    dbname:         string
    owner:          string
    size:           number
    numbackends:    number
}

export interface DbListResponse {
    error:      boolean
    message?:   string
    result?:    Db[]
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

    constructor(private httpClient: HttpClient) { }

    list(agentId: number, pattern: string) {
        return this.httpClient.post<DbListResponse>(`/api/v1/db/listall`, {
            "agentId":  agentId,
            "pattern":  pattern
        })
    }

}
