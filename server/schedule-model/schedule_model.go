/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package scheduleModel

import (
    "log"
    "errors"
    "github.com/jmoiron/sqlx"
)

const scheme = `
    DROP TABLE IF EXISTS schedules;
    CREATE TABLE IF NOT EXISTS schedules (
        id          INTEGER PRIMARY KEY,
        agent_id    INTEGER NOT NULL,
        store_id    INTEGER NOT NULL,
        action_type VARCHAR(255) NOT NULL,
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

type Schedule struct {
    Id          int     `db:"id"            json:"id"`
    AgentId     int     `db:"agent_id"      json:"agentId"`
    StoreId     int     `db:"store_id"      json:"storeId"`

    ActionType  string  `db:"action_type"   json:"actionType"`        // dump, restore, ?copy
    StorePath   string  `db:"store_path"    json:"storePath"`
    Resourse    string  `db:"resourse"      json:"resourse"`

    Mins        string  `db:"mins"          json:"mins"`
    Hours       string  `db:"hours"         json:"hours"`
    Mdays       string  `db:"mdays"         json:"mdays"`
    Wdays       string  `db:"wdays"         json:"wdays"`
    Depth       int     `db:"depth"         json:"depth"`
}

type Page struct {
    Total           int         `json:"total"`
    Offset          int         `json:"offset"`
    Limit           int         `json:"limit"`
    ResoursePattern string      `json:"resoursePattern"`
    Schedules       *[]Schedule `json:"schedules"`
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
    request = `SELECT COUNT(id) as total FROM schedules WHERE resourse LIKE $1`
    err = this.db.QueryRow(request, resoursePattern).Scan(&total)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Total = total

    var schedules []Schedule
    request = `SELECT
                    id,
                    agent_id,
                    store_id,
                    action_type,
                    store_path,
                    resourse,
                    mins,
                    hours,
                    wdays,
                    mdays,
                    depth
                FROM schedules
                WHERE resourse LIKE $1
                ORDER BY resourse
                LIMIT $2 OFFSET $3`
    err = this.db.Select(&schedules, request, resoursePattern, page.Limit, page.Offset)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Schedules = &schedules
    return nil
}

func (this *Model) Create(schedule Schedule) error {
    request := `INSERT INTO schedules(
                    agent_id,
                    store_id,
                    action_type,
                    store_path,
                    resourse,
                    mins,
                    hours,
                    wdays,
                    mdays,
                    depth)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
    _, err := this.db.Exec(request,
            schedule.AgentId,
            schedule.StoreId,
            schedule.ActionType,
            schedule.StorePath,
            schedule.Resourse,
            schedule.Mins,
            schedule.Hours,
            schedule.Wdays,
            schedule.Mdays,
            schedule.Depth)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) ListAll(resoursePattern string) (*[]Schedule, error) {
    var request string
    var err error
    resoursePattern = "%" + resoursePattern + "%"
    var schedules []Schedule
    request = `SELECT
                    s.id,
                    s.agent_id,
                    s.store_id,
                    s.action_type,
                    s.store_path,
                    s.resourse,
                    s.mins,
                    s.hours,
                    s.wdays,
                    s.mdays,
                    s.depth
                FROM schedules as s
                WHERE resourse LIKE $1
                ORDER BY resourse`
    err = this.db.Select(&schedules, request, resoursePattern)
    if err != nil {
        log.Println(err)
        return nil, err
    }
    return &schedules, nil
}

func (this *Model) GetById(id int) (Schedule, error) {
    var request string
    var err error
    var schedules []Schedule
    var schedule Schedule
    request = `SELECT
                    id,
                    agent_id,
                    store_id,
                    action_type,
                    store_path,
                    resourse,
                    mins,
                    hours,
                    wdays,
                    mdays,
                    depth
                FROM schedules
                WHERE id = $1`
    err = this.db.Select(&schedules, request, id)
    if err != nil {
        log.Println(err)
        return schedule, err
    }

    if len(schedules) == 0 {
        err := errors.New("schedule not found")
        log.Println(err)
        return schedule, err
    }
    schedule = schedules[0]
    return schedule, nil
}


func (this *Model) Update(schedule Schedule) error {
    var err error
    request := `UPDATE schedules
                SET agent_id = $1,
                    store_id = $2,
                    type = $3,
                    store_path = $4,
                    resourse = $5,
                    mins = $6,
                    hours = $7,
                    wdays = $8,
                    mdays = $9,
                    depth = $10
                WHERE id = $11`

    _, err = this.db.Exec(request,
                    schedule.AgentId,
                    schedule.StoreId,
                    schedule.ActionType,
                    schedule.StorePath,
                    schedule.Resourse,
                    schedule.Mins,
                    schedule.Hours,
                    schedule.Wdays,
                    schedule.Mdays,
                    schedule.Depth,
                    schedule.Id)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Delete(agent Schedule) error {
    request := `DELETE FROM schedules WHERE id = $1`
    _, err := this.db.Exec(request, agent.Id)
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
