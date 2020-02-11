/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */


package agentController

import (
    "net/http"
    "fmt"
    "errors"
    "log"

    "github.com/gin-gonic/gin"
    "github.com/jmoiron/sqlx"

    "master/config"
    "master/server/agent-model"
)

type AgentController struct {
    config *config.Config
    db *sqlx.DB
    agent *agentModel.Model
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

func (this *AgentController) List(context *gin.Context) {
    var page agentModel.Page
    _ = context.Bind(&page)
    this.agent.List(&page)
    sendResult(context, &page)
}

func (this *AgentController) Create(context *gin.Context) {
    var agent agentModel.Agent
    var err error
    err = context.Bind(&agent)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.agent.Create(agent)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func (this *AgentController) Update(context *gin.Context) {
    var agent agentModel.Agent
    var err error
    err = context.Bind(&agent)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.agent.Update(agent)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func (this *AgentController) Delete(context *gin.Context) {
    var agent agentModel.Agent
    var err error
    err = context.Bind(&agent)
    if err != nil {
        sendError(context, err)
        return
    }

    err = this.agent.Delete(agent)
    if err != nil {
        sendError(context, err)
        return
    }
    sendOk(context)
}

func New(config *config.Config, db *sqlx.DB) *AgentController {
    return &AgentController{
        config: config,
        db: db,
        agent: agentModel.New(db),
    }
}
