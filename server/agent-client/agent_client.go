
/*
 * Copyright 2019 Oleg Borodin  <borodin@unix7.org>
 */

package agentClient

import (
    "bytes"
    "crypto/tls"
    "encoding/json"
    "errors"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "net/url"
    "strconv"
)

type Model struct {
}

type URI struct {
    Scheme      string
    //Username    string
    //Password    string
    Hostname    string
    Userinfo    string
    Port        int
    Path        string
}

const (
    defaultPort int = 7002
)

func UriParse(compactURI string) (URI, error) {
    var err error
    var uri URI

    parsedURI, err := url.Parse(compactURI)
    if err != nil {
        return uri, err
    }

    uri.Scheme = parsedURI.Scheme
    uri.Hostname = parsedURI.Host

    uri.Port = defaultPort
    if len(parsedURI.Port()) != 0 {
        uri.Port, err = strconv.Atoi(parsedURI.Port())
        if err != nil {
            return uri, err
        }
    }

    //uri.Username = parsedURI.User.Username()
    //password, exists := parsedURI.User.Password()
    //if exists {
        //uri.Password = password
    //}

    uri.Userinfo = parsedURI.User.String()
    uri.Path = parsedURI.Path

    return uri, nil
}

type Db struct {
    DbName          string  `json:"dbname"`
    Owner           string  `json:"owner"`
    Size            int     `json:"size"`
    Numbackends     int     `json:"numbackends"`
}

type ListDbResponse struct {
    Error       bool        `json:"error"`
    Message     string      `json:"message"`
    Result      []Db        `json:"result"`
}


type ListDbForm struct {
    Pattern     string  `json:"pattern"`
}

func ListAllDB(agentURI string, pattern string) (*[]Db, error) {

    var err error
    var response ListDbResponse
    var dbs []Db

    parsedURI, err := UriParse(agentURI)
    if err != nil {
        return &dbs, err
    }

    requestURL := fmt.Sprintf("%s://%s@%s/api/v1/db/listall",
        parsedURI.Scheme,
        parsedURI.Userinfo,
        parsedURI.Hostname)

    fmt.Println(requestURL)

    transCfg := &http.Transport{
         TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
    }
    client := &http.Client{Transport: transCfg}

    form := ListDbForm{
        Pattern: pattern,
    }
    data, _ := json.Marshal(form)
    reader := bytes.NewReader([]byte(data))

    resp, err := client.Post(requestURL, "application/json", reader)
    if err != nil {
        return &dbs, err
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return &dbs, err
    }

    err = json.Unmarshal(body, &response)
    if err != nil {
        return &dbs, err
    }

    if response.Error == true {
        log.Println(response.Message)
        return &dbs, errors.New(response.Message)
    }
    return &(response.Result), nil
}

type DbUser struct {
    Username    string  `json:"username"`
    Password    string  `json:"password"`
    Superuser   bool    `json:"superuser"`
}

type ListDbUserResponse struct {
    Error       bool        `json:"error"`
    Message     string      `json:"message"`
    Result      []DbUser    `json:"result"`
}

type ListDbUserForm struct {
    Pattern     string      `json:"pattern"`
}

func ListAllDbUsers(agentURI string, pattern string) (*[]DbUser, error) {

    var err error
    var response ListDbUserResponse
    var dbUsers []DbUser

    parsedURI, err := UriParse(agentURI)
    if err != nil {
        return &dbUsers, err
    }

    requestURL := fmt.Sprintf("%s://%s@%s/api/v1/dbuser/listall",
        parsedURI.Scheme,
        parsedURI.Userinfo,
        parsedURI.Hostname)

    fmt.Println(requestURL)

    transCfg := &http.Transport{
         TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
    }
    client := &http.Client{Transport: transCfg}

    form := ListDbUserForm{
        Pattern: pattern,
    }
    data, _ := json.Marshal(form)
    reader := bytes.NewReader([]byte(data))

    resp, err := client.Post(requestURL, "application/json", reader)
    if err != nil {
        return &dbUsers, err
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return &dbUsers, err
    }

    err = json.Unmarshal(body, &response)
    if err != nil {
        return &dbUsers, err
    }

    if response.Error == true {
        log.Println(response.Message)
        return &dbUsers, errors.New(response.Message)
    }
    return &(response.Result), nil
}
