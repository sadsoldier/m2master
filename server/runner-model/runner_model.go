/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */


package runnerModel

import (
    "bytes"
    "crypto/tls"
    "encoding/json"
    "errors"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"

    //"io"
    //"log"
    //"mime/multipart"
    //"net/url"
    //"os"
    //"path/filepath"
    //"regexp"
    //"strconv"
    //"strings"
    "time"
    "math/rand"

    "github.com/jmoiron/sqlx"

    //"master/server/schedule-model"
    "master/server/agent-model"
    "master/server/store-model"

)


type Model struct {
    dbx *sqlx.DB
}

type DumpForm struct {
    ResourseType    string      `json:"resourseType"`   // pgsql, mysql, file
    ResourseName    string      `json:"resourseName"`

    TransportType   string      `json:"transport"`      // s2, sftp
    StoreURI        string      `json:"storeURI"`

    JobId           string      `json:"jobId"`
    JobOrigin       string      `json:"jobOrigin"`
    Timestamp       string      `json:"timestamp"`
    ReportURI       string      `json:"reportURI"`
    MagicCode       string      `json:"magicCode"`
}

type RestoreForm struct {
    TransportType   string      `json:"transportType"`
    StorageURI      string      `json:"storageURI"`

    DumpFilename    string      `json:"dumpFilename"`

    ResourseType    string      `json:"resourseType"`
    ResourseOwner   string      `json:"resourseOwner"`
    Destination     string      `json:"destination"`

    JobId           string      `json:"jobId"`
    JobOrigin       string      `json:"jobOrigin"`
    Timestamp       string      `json:"timestamp"`

    ReportURI       string      `json:"reportURI"`
    MagicCode       string      `json:"magicCode"`
}

type DumpRequestOrder struct {
    AgentId         int
    ResourseType    string
    ResourseName    string

    StoreId         int
    StorePath       string

    JobOrigin       string
}

type Response struct {
    Error       bool        `json:"error"`
    Message     string      `json:"message"`
}


func (this *Model) SendDumpRequest(order DumpRequestOrder) error {

    var err error

    agentInstance := agentModel.New(this.dbx)
    agent, err := agentInstance.GetById(order.AgentId)
    if err != nil {
        return err
    }

    storeInstance := storeModel.New(this.dbx)
    store, err := storeInstance.GetById(order.StoreId)
    if err != nil {
        return err
    }

    log.Println(agent, store)

    storeURI := fmt.Sprintf("%s://%s:%s@%s:%d/%s",
            store.Scheme,
            store.Username,
            store.Password,
            store.Hostname,
            store.Port,
            order.StorePath)

    form := DumpForm{
        ResourseType:   "pgsql",
        ResourseName:   "template1",

        TransportType:  store.Type,
        StoreURI:       storeURI,

        JobId:          randString(12),
        JobOrigin:      order.JobOrigin,
        Timestamp:      time.Now().Format(time.RFC3339),
        ReportURI:      "localhost",
        MagicCode:      randString(12),
    }

    log.Println(agent, store, form)

    transCfg := &http.Transport{
         TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
    }
    client := &http.Client{Transport: transCfg}

    data, _ := json.Marshal(form)
    reader := bytes.NewReader([]byte(data))

    agentURL := fmt.Sprintf("%s://%s:%s@%s:%d/api/v1/db/dump",
            agent.Scheme,
            agent.Username,
            agent.Password,
            agent.Hostname,
            agent.Port)

    log.Println(form, agentURL)

    resp, err := client.Post(agentURL, "application/json", reader)
    if err != nil {
        return err
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return err
    }

    var response Response
    err = json.Unmarshal(body, &response)
    if err != nil {
        return err
    }

    if response.Error == true {
        log.Println(response.Message)
        return errors.New(response.Message)
    }

    return nil
}

func (this *Model) SendRestoreRequest() error {
    return nil
}

func New(dbx *sqlx.DB) *Model {
    model := Model{
        dbx: dbx,
    }
    return &model
}

func randString(n int) string {
    const letters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    arr := make([]byte, n)
    for i := range arr {
        arr[i] = letters[rand.Intn(len(letters))]
    }
    return string(arr)
}
