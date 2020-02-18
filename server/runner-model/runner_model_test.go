/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package runnerModel

import (
    "testing"
    //"log"
   "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"
)


func createDB() (*sqlx.DB, error) {
    db, err := sqlx.Open("sqlite3", "m2srv.db")
    if err != nil {
        return db, err
    }
    err = db.Ping()
    if err != nil {
        return db, err
    }
    return db, nil
}

func TestDump(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    order := DumpRequestOrder{
        AgentId:         1,
        ResourseType:    "pgsql",
        ResourseName:    "template2",
        StoreId:         1,
        StorePath:       "/data/",
        JobOrigin:       "localhost",
    }

    runner := New(dbx)

    err = runner.SendDumpRequest(order)
    if err != nil {
        t.Error(err)
    }

}
