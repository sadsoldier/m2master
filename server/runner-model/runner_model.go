/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */


package runnerModel

import (
    "log"
    "regexp"
    "strings"
    "strconv"
    "time"

    "github.com/jmoiron/sqlx"

    "master/server/schedule-model"
)

type DumpRequest struct {
    ResourseType    string      `json:"resorseType"` // pgsql, mysql, file
    Resourse        string      `json:"resourse"`

    TransportType   string      `json:"transport"`  // s2, sftp
    StorageURI      string      `json:"storage"`

    JobId           string      `json:"jobId"`
    JobOrigin       string      `json:"jobOrigin"`
    Timestamp       string      `json:"timetsamp"`
    ReportURI       string      `json:"reportURI"`
    MagicCode       string      `json:"magicCode"`
}

type RestoreRequest struct {
    TransportType   string      `json:"transportType"`
    StorageURI      string      `json:"storageURI"`

    SourseFilename  string      `json:"source"`

    ResourseType    string      `json:"resourseType"`
    Destination     string      `json:"destination"`
    ResourseOwner   string      `json:"resourseOwner"`

    JobId           string      `json:"jobId"`
    JobOrigin       string      `json:"jobOrigin"`
    Timestamp       string      `json:"timetsamp"`

    ReportURI       string      `json:"reportTo"`
    MagicCode       string      `json:"magicCode"`
}


type Model struct {
    dbx *sqlx.DB
}

func (this *Model) Run() {

    var err error

    schedule := scheduleModel.New(this.dbx)
    schedules, err := schedule.ListAll("")
    if err != nil {
        log.Println(err)
    }

    now := time.Now()
    hour := now.Hour()
    min := now.Minute()
    mday := now.Day()
    wday := int(now.Weekday())


    for _, item := range *schedules {
        //if len(item.Wdays) == 0 {
        //    continue
        //}

        mapMdays := Expander(item.Mdays, 1, 31) // 1..31
        if mapMdays[mday] != true {
            continue
        }

        mapWdays := Expander(item.Wdays, 1, 7)  // 1..7
        if mapWdays[wday] != true {
            continue
        }

        mapHours := Expander(item.Hours, 0, 23) // 0..23
        if mapHours[hour] != true {
            continue
        }

        mapMins := Expander(item.Mins, 0, 59)  // 0..59
        if mapMins[min] != true {
            continue
        }

        log.Println("generate job", item)
    }


}


func New(dbx *sqlx.DB) *Model {
    model := Model{
        dbx: dbx,
    }
    return &model
}


/* Expand comma-separated list records like * /N, N-M,* */

func Expander(items string, min, max int) map[int]bool  {

    //items = strings.ReplaceAll(items, "--", "-")
    //items = strings.ReplaceAll(items, ",,", ",")
    //items = strings.ReplaceAll(items, "//", "/")

    field := make(map[int]bool)

    for i := min; i < max; i++ {
        field[i] = false
    }

    for _, item := range strings.Split(items, ",") {
        if len(item) == 0 {
            continue
        }

        var match bool

        match, _ = regexp.MatchString(`^\*$`, item)
        if match {
            for i := min; i < max; i++ {
                field[i] = true
            }
        }

        match, _ = regexp.MatchString(`^\*/[0-9]+$`, item)
        if match {
            arr := strings.Split(item, "/")
            period, _ := strconv.Atoi(arr[1])

            num := min
            field[num] = true // low bound always true?
            for i := min; i < max; i++ {
                num = num + period
                if num > max {
                    break
                }
                field[num] = true
            }
        }

        match, _ = regexp.MatchString(`^[0-9]+-[0-9]+$`, item)
        if match {
            arr := strings.Split(item, "-")
            begin, _ := strconv.Atoi(arr[0])
            end, _ := strconv.Atoi(arr[1])

            for i := begin; i < end + 1 && i < max; i++ {
                field[i] = true
            }
        }
    }

    return field
}
