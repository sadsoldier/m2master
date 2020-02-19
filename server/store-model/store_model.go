/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package storeModel

import (
    "log"
    "errors"
    "fmt"

    "github.com/jmoiron/sqlx"
)

const scheme = `
    DROP TABLE IF EXISTS stores;
    CREATE TABLE IF NOT EXISTS stores (
        id          INTEGER PRIMARY KEY,
        type        VARCHAR(255) NOT NULL,
        scheme      VARCHAR(255) NOT NULL,
        hostname    VARCHAR(255) NOT NULL,
        port        INTEGER NOT NULL,
        username    VARCHAR(255) NOT NULL,
        password    VARCHAR(255) NOT NULL,
        uri         VARCHAR(255) NOT NULL,
        safe_uri    VARCHAR(255) NOT NULL
    );`

type Model struct {
    db *sqlx.DB
}

type Store struct {
    Id          int     `db:"id"        json:"id"`
    Type        string  `db:"type"      json:"storeType"`

    Scheme      string  `db:"scheme"    json:"scheme"`
    Hostname    string  `db:"hostname"  json:"hostname"`
    Port        int     `db:"port"      json:"port"`

    Username    string  `db:"username"  json:"username"`
    Password    string  `db:"password"  json:"password"`

    URI         string  `db:"uri"       json:"uri"`
    SafeURI     string  `db:"safe_uri"  json:"safeURI"`

}

type Page struct {
    Total           int         `json:"total"`
    Offset          int         `json:"offset"`
    Limit           int         `json:"limit"`
    HostnamePattern string      `json:"store_pattern"`
    Stores          *[]Store    `json:"stores,omitempty"`
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

    hostnamePattern := "%" + page.HostnamePattern + "%"
    request = `SELECT COUNT(id) as total FROM stores WHERE hostname LIKE $1`
    err = this.db.QueryRow(request, hostnamePattern).Scan(&total)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Total = total

    var stores []Store
    request = `SELECT id, type, scheme, hostname, port, username, '' as password, uri, safe_uri
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

func (this *Model) ListAll(hostnamePattern string) (*[]Store, error) {
    var request string
    var err error
    hostnamePattern = "%" + hostnamePattern + "%"
    var stores []Store
    request = `SELECT id, type, scheme, hostname, port, username, '' as password, uri, safe_uri
                FROM stores
                ORDER BY hostname`
    err = this.db.Select(&stores, request, hostnamePattern)
    if err != nil {
        log.Println(err)
        return nil, err
    }
    return &stores, nil
}

func (this *Model) GetById(id int) (Store, error) {
    var request string
    var err error

    var store Store
    var stores []Store
    request = `SELECT id, type, scheme, hostname, port, username, password, uri, safe_uri
                FROM stores
                WHERE id = $1 LIMIT 1`

    err = this.db.Select(&stores, request, id)
    if err != nil {
        log.Println(err)
        return store, err
    }
    if len(stores) == 0 {
        err = errors.New(fmt.Sprintf("store id=%d not found", id))
        log.Println(err)
        return store, err
    }

    return stores[0], nil
}


func (this *Model) Create(store Store) error {
    request := `INSERT INTO stores(type, scheme, hostname, port, username, password, uri, safe_uri)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    uri := fmt.Sprintf("%s://%s:%s@%s:%d",
                    store.Scheme,
                    store.Username,
                    store.Password,
                    store.Hostname,
                    store.Port)
    safeURI := fmt.Sprintf("%s://%s:%d",
                    store.Scheme,
                    store.Hostname,
                    store.Port)

    _, err := this.db.Exec(
                    request,
                    store.Type,
                    store.Scheme,
                    store.Hostname,
                    store.Port,
                    store.Username,
                    store.Password,
                    uri, safeURI)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Update(store Store) error {
    var err error

    oldStore, err := this.GetById(store.Id)
    if err != nil {
        log.Println(err)
        return err
    }

    if len(store.Password) == 0 {
        store.Password = oldStore.Password
    }

    uri := fmt.Sprintf("%s://%s:%s@%s:%d",
                    store.Scheme,
                    store.Username,
                    store.Password,
                    store.Hostname,
                    store.Port)
    safeURI := fmt.Sprintf("%s://%s:%d",
                    store.Scheme,
                    store.Hostname,
                    store.Port)

    request := `UPDATE stores
                SET type = $1, scheme = $2, hostname = $3, port = $4, username = $5, password = $6, uri = $7, safe_uri = $8
                WHERE id = $9`
    _, err = this.db.Exec(request,
                    store.Type,
                    store.Scheme,
                    store.Hostname,
                    store.Port,
                    store.Username,
                    store.Password,
                    uri,
                    safeURI,
                    store.Id)
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


func New(db *sqlx.DB) *Model {
    model := Model{
        db: db,
    }
    return &model
}
