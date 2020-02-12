import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Agent {
    id?: number
    schema?: string
    hostname?: string
    port?: number
    username?: string
    password?: string
}

export interface AgentPage {
    total?: number
    offset: number
    limit: number
    hostnamePattern: string
    agents: Agent[]
}

export interface AgentResponse {
    error: boolean
    message?: string
    result?: AgentPage
}

@Injectable({
    providedIn: 'root'
})

export class AgentService {

    constructor(private httpClient: HttpClient) { }

    list(page: AgentPage) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        })
    }

    create(agent: Agent) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/create`, {
            "schema": agent.schema,
            "hostname": agent.hostname,
            "port": agent.port,
            "password": agent.password,
            "username": agent.username,
        })
    }

    update(agent: Agent) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/update`, {
            "id": agent.id,
            "schema": agent.schema,
            "hostname": agent.hostname,
            "port": agent.port,
            "password": agent.password,
            "username": agent.username,
        })
    }


    deletex(agent: Agent) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/delete`, {
            "id": agent.id
        })
    }

}
