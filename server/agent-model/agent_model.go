/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package agentModel

import (
    "log"
    "errors"
    "fmt"

    "github.com/jmoiron/sqlx"
)

const scheme = `
    DROP TABLE IF EXISTS agents;
    CREATE TABLE IF NOT EXISTS agents (
        id          INTEGER PRIMARY KEY,
        scheme      VARCHAR(255) NOT NULL,
        hostname    VARCHAR(255) NOT NULL UNIQUE,
        port        INTEGER NOT NULL,
        username    VARCHAR(255) NOT NULL,
        password    VARCHAR(255) NOT NULL,
        uri         VARCHAR(255) NOT NULL,
        safe_uri    VARCHAR(255) NOT NULL
    );`

type Model struct {
    db *sqlx.DB
}

type Agent struct {
    Id          int     `db:"id"        json:"id"`

    Scheme      string  `db:"scheme"    json:"scheme"`
    Hostname    string  `db:"hostname"  json:"hostname"`
    Port        int     `db:"port"      json:"port"`

    Username    string  `db:"username" json:"username"`
    Password    string  `db:"password" json:"password"`

    URI         string  `db:"uri"      json:"uri"`
    SafeURI     string  `db:"safe_uri" json:"safeURI"`
}

type Page struct {
    Total           int         `json:"total"`
    Offset          int         `json:"offset"`
    Limit           int         `json:"limit"`
    HostnamePattern string      `json:"hostnamePattern"`
    Agents          *[]Agent    `json:"agents"`
}

func (this *Model) Migrate() error {
    _, err := this.db.Exec(scheme)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) List(page *Page) error {
    var request string
    var err error
    var total int

    hostnamePattern := "%" + page.HostnamePattern + "%"
    request = `SELECT COUNT(id) as total FROM agents WHERE hostname LIKE $1`
    err = this.db.QueryRow(request, hostnamePattern).Scan(&total)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Total = total

    var agents []Agent
    request = `SELECT id, scheme, hostname, port, username, '' as password, uri, safe_uri
                FROM agents
                WHERE hostname LIKE $1
                ORDER BY hostname
                LIMIT $2 OFFSET $3`

    err = this.db.Select(&agents, request, hostnamePattern, page.Limit, page.Offset)
    if err != nil {
        log.Println(err)
        return err
    }
    page.Agents = &agents
    return nil
}

func (this *Model) GetById(id int) (Agent, error) {
    var request string
    var err error

    var agents []Agent
    var agent Agent

    request = `SELECT id, scheme, hostname, port, username, password, uri, safe_uri
                FROM agents
                WHERE id = $1 LIMIT 1`

    err = this.db.Select(&agents, request, id)
    if err != nil {
        log.Println(err)
        return agent, err
    }

    if len(agents) == 0 {
        err = errors.New(fmt.Sprintf("agent id=%d not found", id))
        log.Println(err)
        return agent, err
    }
    return agents[0], nil
}

func (this *Model) Create(agent Agent) error {
    request := `INSERT INTO agents(scheme, hostname, port, username, password, uri, safe_uri)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`
    uri := fmt.Sprintf("%s://%s:%s@%s:%d",
                        agent.Scheme,
                        agent.Username,
                        agent.Password,
                        agent.Hostname,
                        agent.Port)
    safeURI := fmt.Sprintf("%s://%s:%d",
                        agent.Scheme,
                        agent.Hostname,
                        agent.Port)

    _, err := this.db.Exec(request,
                        agent.Scheme,
                        agent.Hostname,
                        agent.Port,
                        agent.Username,
                        agent.Password,
                        uri,
                        safeURI)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Update(agent Agent) error {
    var err error

    oldAgent, err := this.GetById(agent.Id)
    if err != nil {
        log.Println(err)
        return err
    }

    if len(agent.Password) == 0 {
        agent.Password = oldAgent.Password
    }

    uri := fmt.Sprintf("%s://%s:%s@%s:%d",
                    agent.Scheme,
                    agent.Username,
                    agent.Password,
                    agent.Hostname,
                    agent.Port)
    safeURI := fmt.Sprintf("%s://%s:%d",
                        agent.Scheme,
                        agent.Hostname,
                        agent.Port)
    request := `UPDATE agents
                SET scheme = $1, hostname = $2, port = $3, username = $4, password = $5, uri = $6, safe_uri = $7
                WHERE id = $8`
    _, err = this.db.Exec(request,
                    agent.Scheme,
                    agent.Hostname,
                    agent.Port,
                    agent.Username,
                    agent.Password,
                    uri,
                    safeURI,
                    agent.Id)
    if err != nil {
        log.Println(err)
        return err
    }
    return nil
}

func (this *Model) Delete(agent Agent) error {
    request := `DELETE FROM agents WHERE id = $1`
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
