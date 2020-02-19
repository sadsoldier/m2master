import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Schedule {
    id?: number
    agentId?:     number
    agentURI?:    string

    storeId?:     number
    storeURI?:    string

    actionType?:  string
    storePath?:   string
    resourse?:    string
    mins?:        string
    hours?:       string
    mdays?:       string
    wdays?:       string
    depth?:       number
}

export interface SchedulePage {
    total?: number
    offset: number
    limit: number
    hostnamePattern: string
    schedules: Schedule[]
}

export interface ScheduleResponse {
    error: boolean
    message: string
    result: SchedulePage
}

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {

    constructor(private httpClient: HttpClient) { }

    list(page: SchedulePage) {
        return this.httpClient.post<ScheduleResponse>(`/api/v1/schedule/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        })
    }

    create(schedule: Schedule) {
        return this.httpClient.post<ScheduleResponse>(`/api/v1/schedule/create`, {
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "actionType": schedule.actionType,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        })
    }

    update(schedule: Schedule) {
        return this.httpClient.post<ScheduleResponse>(`/api/v1/schedule/update`, {
            "id": schedule.id,
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "actionType": schedule.actionType,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        })
    }


    deletex(schedule: Schedule) {
        return this.httpClient.post<ScheduleResponse>(`/api/v1/schedule/delete`, {
            "id": schedule.id
        })
    }

}
