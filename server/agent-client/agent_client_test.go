/*
 * Copyright 2020 Oleg Borodin  <borodin@unix7.org>
 */

package agentClient

import (
    "fmt"
    "testing"
)

const (
    uri string = "https://user1:12345@localhost:7002"
)

func TestList(t *testing.T) {

    db, err := ListAllDB(uri, "t")
    if err != nil {
        t.Error(err)
    }
    fmt.Println(db)
}
