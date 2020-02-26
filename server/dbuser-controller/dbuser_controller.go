/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package dbUserController

import (
    "net/http"
    "fmt"
    "errors"
    "log"

    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx"

    "master/config"
    "master/server/agent-client"
    "master/server/agent-model"
)

type Controller struct {
    config *config.Config
    dbx *sqlx.DB
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

type ListAllRequest struct {
    AgentId     int     `json:"agentId"`
    Pattern     string  `json:"pattern"`
}

func (this *Controller) ListAll(context *gin.Context) {

    var request ListAllRequest
    var err error

    err = context.Bind(&request)
    if err != nil {
        sendError(context, err)
        return
    }

    agent := agentModel.New(this.dbx)

    agentProfile, err := agent.GetById(request.AgentId)
    if err != nil {
        sendError(context, err)
        return
    }

    dbUsers, err := agentClient.ListAllDbUsers(agentProfile.URI, request.Pattern)
    if err != nil {
        sendError(context, err)
        return
    }
    sendResult(context, &dbUsers)
}

func New(config *config.Config, dbx *sqlx.DB) *Controller {
    return &Controller{
        config: config,
        dbx: dbx,
    }
}
