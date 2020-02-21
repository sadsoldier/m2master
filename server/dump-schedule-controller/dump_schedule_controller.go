/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package dumpScheduleController

import (
    "net/http"
    "fmt"
    "errors"
    "log"

    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx"

    "master/config"
    "master/server/dump-schedule-model"
)

type Controller struct {
    config *config.Config
    db *sqlx.DB
    schedule *dumpScheduleModel.Model
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

func (this *Controller) List(context *gin.Context) {
    var page dumpScheduleModel.Page
    var err error

    err = context.Bind(&page)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.schedule.List(&page)
    if err != nil {
        sendError(context, err)
        return
    }
    sendResult(context, &page)
}

type ListAllReq struct {
    ResoursePattern string      `json:"resoursePattern"`
}


func (this *Controller) ListAll(context *gin.Context) {
    var err error
    var req ListAllReq
    err = context.Bind(&req)
    if err != nil {
        sendError(context, err)
        return
    }

    schedules, err := this.schedule.ListAll(req.ResoursePattern)
    if err != nil {
        sendError(context, err)
        return
    }
    sendResult(context, *schedules)
}


func (this *Controller) Create(context *gin.Context) {
    var schedule dumpScheduleModel.DumpSchedule
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

func (this *Controller) Update(context *gin.Context) {
    var schedule dumpScheduleModel.DumpSchedule
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

func (this *Controller) Delete(context *gin.Context) {
    var schedule dumpScheduleModel.DumpSchedule
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

func New(config *config.Config, db *sqlx.DB) *Controller {
    return &Controller{
        config: config,
        db: db,
        schedule: dumpScheduleModel.New(db),
    }
}
