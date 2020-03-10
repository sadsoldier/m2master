import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface DumpSchedule {
    id?: number

    agentId?:     number
    agentURI?:    string
    resourse?:    string

    storeId?:     number
    storeURI?:    string
    storeType?:   string
    storePath?:   string

    mins?:        string
    hours?:       string
    mdays?:       string
    wdays?:       string

    depth?:       number
}

export interface DumpSchedulePage {
    total?:             number
    offset:             number
    limit:              number
    hostnamePattern:    string
    dumpSchedules:      DumpSchedule[]
}

export interface DumpScheduleResponse {
    error: boolean
    message: string
    result: DumpSchedulePage
}

@Injectable({
    providedIn: 'root'
})

export class DumpScheduleService {

    constructor(private httpClient: HttpClient) { }

    list(page: DumpSchedulePage) {
        return this.httpClient.post<DumpScheduleResponse>(`/api/v1/dump-schedule/list`, {
            "limit": page.limit,
            "offset": page.offset,
            "hostnamePattern": page.hostnamePattern
        })
    }

    create(schedule: DumpSchedule) {
        return this.httpClient.post<DumpScheduleResponse>(`/api/v1/dump-schedule/create`, {
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        })
    }

    update(schedule: DumpSchedule) {
        return this.httpClient.post<DumpScheduleResponse>(`/api/v1/dump-schedule/update`, {
            "id": schedule.id,
            "agentId": schedule.agentId,
            "storeId": schedule.storeId,
            "storePath": schedule.storePath,
            "resourse": schedule.resourse,
            "mins": schedule.mins,
            "hours": schedule.hours,
            "mdays": schedule.mdays,
            "wdays": schedule.wdays,
            "depth": schedule.depth
        })
    }

    deletex(schedule: DumpSchedule) {
        return this.httpClient.post<DumpScheduleResponse>(`/api/v1/dump-schedule/delete`, {
            "id": schedule.id
        })
    }

}
