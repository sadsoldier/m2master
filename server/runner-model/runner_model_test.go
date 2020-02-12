/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package runnerModel

import (
    "testing"
    "os"
    //"fmt"

    "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"

    "master/server/schedule-model"
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

    model := scheduleModel.New(dbx)
    schedule1 := scheduleModel.Schedule{
            AgentId: 1,
            StoreId: 1,
            Type: "dump",
            StorePath: "/" ,
            Resourse: "qwerty",
            Mins: "*/1",
            Hours: "*/1",
            Wdays: "*/1",
            Mdays: "*/1",
            Depth: 10,
    }

    schedule2 := scheduleModel.Schedule{
            AgentId: 1,
            StoreId: 1,
            Type: "dump",
            StorePath: "/" ,
            Resourse: "qwerty",
            Mins: "*/2",
            Hours: "*/1",
            Wdays: "*/1",
            Mdays: "*/1",
            Depth: 10,
    }

    schedule3 := scheduleModel.Schedule{
            AgentId: 1,
            StoreId: 1,
            Type: "dump",
            StorePath: "/" ,
            Resourse: "qwerty",
            Mins: "*",
            Hours: "*/1",
            Wdays: "*/1",
            Mdays: "*/1",
            Depth: 10,
    }



    err = model.Migrate()
    if err != nil {
        t.Error(err)
    }

    err = model.Create(schedule1)
    if err != nil {
        t.Error(err)
    }
    err = model.Create(schedule2)
    if err != nil {
        t.Error(err)
    }
    err = model.Create(schedule3)
    if err != nil {
        t.Error(err)
    }

    runner := New(dbx)
    runner.Run()

}
