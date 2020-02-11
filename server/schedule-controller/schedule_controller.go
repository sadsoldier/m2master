/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package scheduleController

import (
    "net/http"
    "fmt"
    "errors"
    "log"

    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx"

    "master/config"
    "master/server/schedule-model"
)

type ScheduleController struct {
    config *config.Config
    db *sqlx.DB
    schedule *scheduleModel.Model
}

type Response struct {
    Error       bool        `json:"error"`
    Message     string      `json:"message,omitempty"`
    Result      interface{} `json:"result,omitempty"`
}

func sendError(context *gin.Context, err error) {
    if err == nil {
        err = errors.New("undefined")
    }
    log.Printf("%s\n", err)
    response := Response{
        Error: true,
        Message: fmt.Sprintf("%s", err),
        Result: nil,
    }
    context.JSON(http.StatusOK, response)
}

func sendOk(context *gin.Context) {
    response := Response{
        Error: false,
        Message: "",
        Result: nil,
    }
    context.JSON(http.StatusOK, response)
}

func sendMessage(context *gin.Context, message string) {
    log.Printf("%s\n", message)
    response := Response{
        Error: false,
        Message: fmt.Sprintf("%s", message),
        Result: nil,
    }
    context.JSON(http.StatusOK, response)
}

func sendResult(context *gin.Context, result interface{}) {
    response := Response{
        Error: false,
        Message: "",
        Result: result,
    }
    context.JSON(http.StatusOK, &response)
}

func (this *ScheduleController) List(context *gin.Context) {
    var page scheduleModel.Page
    _ = context.Bind(&page)
    this.schedule.List(&page)
    sendResult(context, &page)
}

func (this *ScheduleController) Create(context *gin.Context) {
    var schedule scheduleModel.Schedule
    var err error
    err = context.Bind(&schedule)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.schedule.Create(schedule)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func (this *ScheduleController) Update(context *gin.Context) {
    var schedule scheduleModel.Schedule
    var err error
    err = context.Bind(&schedule)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.schedule.Update(schedule)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func (this *ScheduleController) Delete(context *gin.Context) {
    var schedule scheduleModel.Schedule
    var err error
    err = context.Bind(&schedule)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.schedule.Delete(schedule)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func New(config *config.Config, db *sqlx.DB) *ScheduleController {
    return &ScheduleController{
        config: config,
        db: db,
        schedule: scheduleModel.New(db),
    }
}
