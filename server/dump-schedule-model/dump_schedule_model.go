/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */

package dumpScheduleModel

import (
    "log"
    "errors"
    "github.com/jmoiron/sqlx"
)

const scheme = `
    DROP TABLE IF EXISTS dump_schedules;
    CREATE TABLE IF NOT EXISTS dump_schedules (
        id          INTEGER PRIMARY KEY,
        agent_id    INTEGER NOT NULL,
        store_id    INTEGER NOT NULL,
        store_path  VARCHAR(255) NOT NULL,
        resourse    VARCHAR(255) NOT NULL,
        mins        VARCHAR(255) NOT NULL,
        hours       VARCHAR(255) NOT NULL,
        wdays       VARCHAR(255) NOT NULL,
        mdays       VARCHAR(255) NOT NULL,
        depth       INTEGER NOT NULL
    );`

type Model struct {
    db *sqlx.DB
}

type DumpSchedule struct {
    Id          int     `db:"id"            json:"id"`
    AgentId     int     `db:"agent_id"      json:"agentId"`
    AgentURI    string  `db:"agent_uri"     json:"agentURI"`
    Resourse    string  `db:"resourse"      json:"resourse"`

    StoreId     int     `db:"store_id"      json:"storeId"`
    StoreType   string  `db:"store_type"    json:"storeType"`
    StoreURI    string  `db:"store_uri"     json:"storeURI"`
    StorePath   string  `db:"store_path"    json:"storePath"`

    Mins        string  `db:"mins"          json:"mins"`
    Hours       string  `db:"hours"         json:"hours"`
    Mdays       string  `db:"mdays"         json:"mdays"`
    Wdays       string  `db:"wdays"         json:"wdays"`
    Depth       int     `db:"depth"         json:"depth"`
}

type Page struct {
    Total           int                 `json:"total"`
    Offset          int                 `json:"offset"`
    Limit           int                 `json:"limit"`
    ResoursePattern string              `json:"resoursePattern"`
    DumpSchedules   *[]DumpSchedule     `json:"dumpSchedules"`
}

func (this *Model) Migrate() error {
    _, err := this.db.Exec(scheme)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) List(page *Page) (error) {
    var request string
    var err error
    var total int

    resoursePattern := "%" + page.ResoursePattern + "%"
    request = `SELECT COUNT(id) as total FROM dump_schedules WHERE resourse LIKE $1`
    err = this.db.QueryRow(request, resoursePattern).Scan(&total)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Total = total

    var dumpSchedules []DumpSchedule
    request = `SELECT
                    d.id as id,
                    d.agent_id as agent_id,
                    a.safe_uri as agent_uri,
                    d.resourse as resourse,

                    d.store_id as store_id,
                    s.type as store_type,
                    s.safe_uri as store_uri,
                    d.store_path as store_path,

                    d.mins as mins,
                    d.hours as hours,
                    d.wdays as wdays,
                    d.mdays as mdays,
                    d.depth as depth
                FROM dump_schedules as d, agents as a, stores as s
                WHERE resourse LIKE $1
                    AND d.agent_id == a.id
                    AND d.store_id == s.id
                ORDER BY resourse
                LIMIT $2 OFFSET $3`
    err = this.db.Select(&dumpSchedules, request, resoursePattern, page.Limit, page.Offset)
    if err != nil {
        log.Println(err)
        return err
    }
    page.DumpSchedules = &dumpSchedules
    return nil
}

func (this *Model) ListAll(resoursePattern string) (*[]DumpSchedule, error) {
    var request string
    var err error
    resoursePattern = "%" + resoursePattern + "%"
    var dumpSchedules []DumpSchedule
    request = `SELECT
                    d.id as id,
                    d.agent_id as agent_id,
                    a.safe_uri as agent_uri,
                    d.resourse as resourse,

                    d.store_id as store_id,
                    s.type as store_type,
                    s.safe_uri as store_uri,
                    d.store_path as store_path,

                    d.mins as mins,
                    d.hours as hours,
                    d.wdays as wdays,
                    d.mdays as mdays,
                    d.depth as depth
                FROM dump_schedules as d, agents as a, stores as s
                WHERE resourse LIKE $1
                    AND d.agent_id == a.id
                    AND d.store_id == s.id
                ORDER BY resourse`
    err = this.db.Select(&dumpSchedules, request, resoursePattern)
    if err != nil {
        log.Println(err)
        return nil, err
    }
    return &dumpSchedules, nil
}

func (this *Model) GetById(id int) (DumpSchedule, error) {
    var request string
    var err error
    var dumpSchedules []DumpSchedule
    var dumpSchedule DumpSchedule
    request = `SELECT
                    d.id as id,
                    d.agent_id as agent_id,
                    a.safe_uri as agent_uri,
                    d.resourse as resourse,

                    d.store_id as store_id,
                    s.type as store_type,
                    s.safe_uri as store_uri,
                    d.store_path as store_path,

                    d.mins as mins,
                    d.hours as hours,
                    d.wdays as wdays,
                    d.mdays as mdays,
                    d.depth as depth
                FROM dump_schedules as d, agents as a, stores as s
                WHERE id = $1
                    AND d.agent_id == a.id
                    AND d.store_id == s.id
                LIMIT 1`
    err = this.db.Select(&dumpSchedules, request, id)
    if err != nil {
        log.Println(err)
        return dumpSchedule, err
    }

    if len(dumpSchedules) == 0 {
        err := errors.New("dump schedule not found")
        log.Println(err)
        return dumpSchedule, err
    }
    dumpSchedule = dumpSchedules[0]
    return dumpSchedule, nil
}

func (this *Model) Create(dumpSchedule DumpSchedule) error {
    request := `INSERT INTO dump_schedules(
                    agent_id,
                    store_id,
                    store_path,
                    resourse,
                    mins,
                    hours,
                    wdays,
                    mdays,
                    depth)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    _, err := this.db.Exec(request,
            dumpSchedule.AgentId,
            dumpSchedule.StoreId,
            dumpSchedule.StorePath,
            dumpSchedule.Resourse,
            dumpSchedule.Mins,
            dumpSchedule.Hours,
            dumpSchedule.Wdays,
            dumpSchedule.Mdays,
            dumpSchedule.Depth)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}


func (this *Model) Update(dumpSchedule DumpSchedule) error {
    var err error
    request := `UPDATE dump_schedules
                SET agent_id = $1,
                    store_id = $2,
                    store_path = $3,
                    resourse = $4,
                    mins = $5,
                    hours = $6,
                    wdays = $7,
                    mdays = $8,
                    depth = $9
                WHERE id = $10`

    _, err = this.db.Exec(request,
                    dumpSchedule.AgentId,
                    dumpSchedule.StoreId,
                    dumpSchedule.StorePath,
                    dumpSchedule.Resourse,
                    dumpSchedule.Mins,
                    dumpSchedule.Hours,
                    dumpSchedule.Wdays,
                    dumpSchedule.Mdays,
                    dumpSchedule.Depth,
                    dumpSchedule.Id)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Delete(dumpSchedule DumpSchedule) error {
    request := `DELETE FROM dump_schedules WHERE id = $1`
    _, err := this.db.Exec(request, dumpSchedule.Id)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func New(db *sqlx.DB) *Model {
    model := Model{
        db: db,
    }
    return &model
}
