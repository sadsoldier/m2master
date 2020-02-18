/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package storeModel

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
    store := Store{
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

    err = model.Create(store)
    if err != nil {
        t.Error(err)
    }

    var stores []Store
    page := Page{
        Limit: 500,
        Stores: &stores,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.Stores)

}

func TestUpdate(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    store := Store{
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

    err = model.Create(store)
    if err != nil {
        t.Error(err)
    }

    var stores []Store
    page := Page{
        Limit: 500,
        Stores: &stores,
    }
    err = model.List(&page)
    if err != nil {
        t.Error(err)
    }
    fmt.Println(*page.Stores)
}


func TestDelete(t *testing.T) {

    dbx, err := createDB()
    if err != nil {
        t.Error(err)
    }

    model := New(dbx)
    store := Store{
        Id: 1,
    }

    err = model.Delete(store)
    if err != nil {
        t.Error(err)
    }

    os.Remove("test.db")
}
