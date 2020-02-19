import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Agent {
    id?:        number
    scheme?:    string
    hostname?:  string
    port?:      number
    username?:  string
    password?:  string
    uri?:       string
    safeURI?:   string
}

export interface AgentPage {
    total?:     number
    offset:     number
    limit:      number
    hostnamePattern: string
    agents:     Agent[]
}

export interface AgentResponse {
    error:      boolean
    message?:   string
    result?:    AgentPage
}

export interface AgentAllResponse {
    error:      boolean
    message?:   string
    result?:    Agent[]
}


@Injectable({
    providedIn: 'root'
})

export class AgentService {

    constructor(private httpClient: HttpClient) { }

    list(page: AgentPage) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/list`, {
            "limit":            page.limit,
            "offset":           page.offset,
            "hostnamePattern":  page.hostnamePattern
        })
    }

    listAll(hostnamePattern: string) {
        return this.httpClient.post<AgentAllResponse>(`/api/v1/agent/listall`, {
            "hostnamePattern": hostnamePattern,
        })
    }

    create(agent: Agent) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/create`, {
            "scheme":   agent.scheme,
            "hostname": agent.hostname,
            "port":     agent.port,
            "password": agent.password,
            "username": agent.username,
        })
    }

    update(agent: Agent) {
        return this.httpClient.post<AgentResponse>(`/api/v1/agent/update`, {
            "id":       agent.id,
            "scheme":   agent.scheme,
            "hostname": agent.hostname,
            "port":     agent.port,
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
