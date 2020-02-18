/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package agentModel

import (
    "testing"

    //"github.com/stretchr/testify/assert"

    "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"

    "os"
    "fmt"
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
    agent := Agent{
        Scheme:     "https",
        Hostname:   "localhost",
        Port:       7002,
        Username:   "user1",
        Password:   "12345",
    }

    err = model.Migrate()
    if err != nil {
        t.Error(err)
    }

    err = model.Create(agent)
    if err != nil {
        t.Error(err)
    }

    var agents []Agent
    page := Page{
        Limit: 500,
        Agents: &agents,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.Agents)

}

func TestUpdate(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    agent := Agent{
        Scheme:     "http",
        Hostname:   "some.bare",
        Port:       7007,
        Username:   "user21",
        Password:   "qwerty",
    }

    err = model.Migrate()
    if err != nil {
        t.Error(err)
    }

    err = model.Create(agent)
    if err != nil {
        t.Error(err)
    }

    var agents []Agent
    page := Page{
        Limit: 500,
        Agents: &agents,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.Agents)
}


func TestDelete(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    agent := Agent{
        Id: 1,
    }

    err = model.Delete(agent)
    if err != nil {
        t.Error(err)
    }

    os.Remove("test.db")


}
