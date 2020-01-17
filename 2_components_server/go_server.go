package main

import (
    // "fmt"
    "net/http"
    "log"
    "encoding/json"
)

type Data struct {
    Fruit Fruits
    Veggies Vegetables
}
type Fruits map[string]int
type Vegetables map[string]int

func main() {
    http.HandleFunc("/fruits_veggies", fruitVeggiesHandler) // 각 요청은 핸들러를 호출합니다.
    log.Fatal(http.ListenAndServe("localhost:5000", nil))
}

// handler는 요청된 URL r의 Path 구성 요소를 반환합니다.
/* json  */
func fruitVeggiesHandler(w http.ResponseWriter, r *http.Request) {
    fruits := make(map[string]int)
    fruits["Apples"] = 25
    fruits["Oranges"] = 10

    vegetables := make(map[string]int)
    vegetables["Carrats"] = 10
    vegetables["Beets"] = 0
    data := Data{fruits, vegetables}
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(data)
}