/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package storeModel

import (
    "log"

    "github.com/jmoiron/sqlx"
)

const schema = `
    DROP TABLE IF EXISTS stores;
    CREATE TABLE IF NOT EXISTS stores (
        id          INTEGER PRIMARY KEY,
        type        VARCHAR(255) NOT NULL,
        schema      VARCHAR(255) NOT NULL,
        hostname    VARCHAR(255) NOT NULL UNIQUE,
        port        INTEGER NOT NULL,
        username    VARCHAR(255) NOT NULL,
        password    VARCHAR(255) NOT NULL
    );`

type Model struct {
    db *sqlx.DB
}

type Store struct {
    Id          int     `db:"id"        json:"id"`

    Type        string  `db:"type"      json:"type"`
    Schema      string  `db:"schema"    json:"schema"`
    Hostname    string  `db:"hostname"  json:"hostname"`
    Port        int     `db:"port"      json:"port"`

    Username    string  `db:"username" json:"username"`
    Password    string  `db:"password" json:"password"`
}

type Page struct {
    Total           int         `json:"total"`
    Offset          int         `json:"offset"`
    Limit           int         `json:"limit"`
    HostnamePattern    string      `json:"store_pattern"`
    Stores          *[]Store    `json:"stores,omitempty"`
}

func (this *Model) Migrate() error {
    _, err := this.db.Exec(schema)
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

    hostnamePattern := "%" + page.HostnamePattern + "%"
    request = `SELECT COUNT(id) as total FROM stores WHERE hostname LIKE $1`
    err = this.db.QueryRow(request, hostnamePattern).Scan(&total)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Total = total

    var stores []Store
    request = `SELECT id, type, schema, hostname, port, username, '' as password
                FROM stores
                WHERE hostname LIKE $1
                ORDER BY hostname
                LIMIT $2 OFFSET $3`

    err = this.db.Select(&stores, request, hostnamePattern, page.Limit, page.Offset)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Stores = &stores
    return nil
}

func (this *Model) Create(store Store) error {
    request := `INSERT INTO stores(type, schema, hostname, port, username, password)
                VALUES ($1, $2, $3, $4, $5, $6)`
    _, err := this.db.Exec(request, store.Type, store.Schema, store.Hostname, store.Port, store.Username, store.Password)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Delete(store Store) error {
    request := `DELETE FROM stores WHERE id = $1`
    _, err := this.db.Exec(request, store.Id)
    if err != nil {
        log.Println(err)
        return err

    }
    return nil
}

func (this *Model) Update(store Store) error {
    var err error
    if len(store.Password) > 0 {
        request := `UPDATE stores
                    SET type = $1, schema = $2, hostname = $3, port = $4, username = $5, password = $6
                    WHERE id = $7`
        _, err = this.db.Exec(request, store.Type, store.Schema, store.Hostname,
                                        store.Port, store.Username, store.Password, store.Id)
    } else {
        request := `UPDATE stores
                    SET type = $1, schema = $2, hostname = $3, port = $4, username = $5
                    WHERE id = $6`
        _, err = this.db.Exec(request, store.Type, store.Schema,store.Hostname,
                                        store.Port, store.Username, store.Id)
    }
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
