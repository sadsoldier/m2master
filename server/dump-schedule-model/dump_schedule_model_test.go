/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package dumpScheduleModel

import (
    "testing"
    "os"
    "fmt"

    "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"
)

func createDB() (*sqlx.DB, error) {
    db, err := sqlx.Open("sqlite3", "test.db")
    if err != nil {
        return db, err
    }
    err = db.Ping()
    if err != nil {
        return db, err
    }
    return db, nil
}

func TestCreate(t *testing.T) {

    var err error
    os.Remove("test.db")

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    dumpSchedule := DumpSchedule{
            AgentId:    1,
            StoreId:    1,
            StorePath:  "/" ,
            Resourse:   "qwerty",
            Mins:       "5",
            Hours:      "5",
            Wdays:      "1",
            Mdays:      "2",
            Depth:      10,
    }

    err = model.Migrate()
    if err != nil {
        t.Error(err)
    }

    err = model.Create(dumpSchedule)
    if err != nil {
        t.Error(err)
    }

    var dumpSchedules []DumpSchedule
    page := Page{
        Limit: 500,
        DumpSchedules: &dumpSchedules,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.DumpSchedules)

}

func TestUpdate(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    dumpSchedule := DumpSchedule{
            Id:         1,
            AgentId:    2,
            StoreId:    2,
            StorePath:  "/" ,
            Resourse:   "qwerty",
            Mins:       "5",
            Hours:      "5",
            Wdays:      "1",
            Mdays:      "2",
            Depth:      10,
    }

    err = model.Migrate()
    if err != nil {
        t.Error(err)
    }

    err = model.Create(dumpSchedule)
    if err != nil {
        t.Error(err)
    }

    var dumpSchedules []DumpSchedule
    page := Page{
        Limit: 500,
        DumpSchedules: &dumpSchedules,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.DumpSchedules)
}


func TestDelete(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    dumpSchedule := DumpSchedule{
        Id: 1,
    }

    err = model.Delete(dumpSchedule)
    if err != nil {
        t.Error(err)
    }

    os.Remove("test.db")
}
