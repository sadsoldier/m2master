/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package scheduleController

import (
    "net/http"
    "net/http/httptest"
    "testing"
    "encoding/json"
    "bytes"
    "fmt"

    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"


    "github.com/stretchr/testify/assert"

    "master/server/schedule-model"
    "master/config"
)

func createDbx() (*sqlx.DB, error) {
    dburi := fmt.Sprintf("test.db")
    dbx, err := sqlx.Open("sqlite3", dburi)
    if err != nil {
        return nil, err
    }
    err = dbx.Ping()
    if err != nil {
        return nil, err
    }
    return dbx, nil
}

func TestCreate(t *testing.T) {

    dbx, err := createDbx()
    if err != nil {
        t.Error(err)
    }

    configuration := config.New()
    controller := New(configuration, dbx)

    controller.schedule.Migrate()

    gin.SetMode(gin.TestMode)

    router := gin.Default()
    router.POST("/create", controller.Create)

    schedule := scheduleModel.Schedule{
            AgentId: 1,
            StoreId: 1,
            Type: "dump",
            StorePath: "/" ,
            Resourse: "qwerty",
            Mins: "5",
            Hours: "5",
            Wdays: "1",
            Mdays: "2",
            Depth: 10,
    }

    data, err := json.Marshal(schedule)
    if err != nil {
        t.Error(err)
    }

    reader := bytes.NewReader(data)
    request, err := http.NewRequest(http.MethodPost, "/create", reader)
    if err != nil {
        t.Fatalf("Couldn't create request: %v\n", err)
    }
    request.Header.Set("Content-Type", "application/json")
    recorder := httptest.NewRecorder()
    router.ServeHTTP(recorder, request)

    assert.Equal(t, http.StatusOK, recorder.Code, "Not equal response code")
    response := Response{}
    err = json.Unmarshal(recorder.Body.Bytes(), &response)
    assert.Equal(t, response.Error, false, "Model or controller error")
}

func TestUpdate(t *testing.T) {

    dbx, err := createDbx()
    if err != nil {
        t.Error(err)
    }

    configuration := config.New()
    controller := New(configuration, dbx)

    gin.SetMode(gin.TestMode)

    router := gin.Default()
    router.POST("/update", controller.Update)

    schedule := scheduleModel.Schedule{
            Id: 1,
            AgentId: 2,
            StoreId: 2,
            Type: "restore",
            StorePath: "/" ,
            Resourse: "qwerty",
            Mins: "5",
            Hours: "5",
            Wdays: "1",
            Mdays: "2",
            Depth: 10,
    }

    data, err := json.Marshal(schedule)
    if err != nil {
        t.Error(err)
    }

    reader := bytes.NewReader(data)
    request, err := http.NewRequest(http.MethodPost, "/update", reader)
    if err != nil {
        t.Fatalf("Couldn't create request: %v\n", err)
    }
    request.Header.Set("Content-Type", "application/json")
    recorder := httptest.NewRecorder()
    router.ServeHTTP(recorder, request)

    assert.Equal(t, http.StatusOK, recorder.Code, "Not equal response code")
    response := Response{}
    err = json.Unmarshal(recorder.Body.Bytes(), &response)
    assert.Equal(t, response.Error, false, "Model or controller error")
}


func TestList(t *testing.T) {

    dbx, err := createDbx()
    if err != nil {
        t.Error(err)
    }

    configuration := config.New()
    controller := New(configuration, dbx)

    gin.SetMode(gin.TestMode)

    router := gin.Default()
    router.POST("/list", controller.List)

    page := scheduleModel.Page{
        Offset: 0,
        Limit: 7,
        ResoursePattern: "q",
    }
    data, err := json.Marshal(page)
    if err != nil {
        t.Error(err)
    }


    reader := bytes.NewReader(data)
    request, err := http.NewRequest(http.MethodPost, "/list", reader)
    if err != nil {
        t.Fatalf("Couldn't create request: %s\n", err)
    }
    request.Header.Set("Content-Type", "application/json")

    recorder := httptest.NewRecorder()
    router.ServeHTTP(recorder, request)

    assert.Equal(t, http.StatusOK, recorder.Code, "Not equal response code")
    response := Response{}
    err = json.Unmarshal(recorder.Body.Bytes(), &response)
    assert.Equal(t, response.Error, false, "Model or controller error")
}

func TestDelete(t *testing.T) {

    dbx, err := createDbx()
    if err != nil {
        t.Error(err)
    }

    configuration := config.New()
    controller := New(configuration, dbx)

    gin.SetMode(gin.TestMode)

    router := gin.Default()
    router.POST("/delete", controller.Delete)

    schedule := scheduleModel.Schedule{
        Id: 1,
    }

    data, err := json.Marshal(schedule)
    if err != nil {
        t.Error(err)
    }

    reader := bytes.NewReader(data)
    request, err := http.NewRequest(http.MethodPost, "/delete", reader)
    if err != nil {
        t.Fatalf("Couldn't create request: %v\n", err)
    }
    request.Header.Set("Content-Type", "application/json")
    recorder := httptest.NewRecorder()
    router.ServeHTTP(recorder, request)

    assert.Equal(t, http.StatusOK, recorder.Code, "response code")
    response := Response{}
    err = json.Unmarshal(recorder.Body.Bytes(), &response)
    assert.Equal(t, response.Error, false, "Model or controller error")
}
