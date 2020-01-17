package main

import (
    // "fmt"
    "net/http"
    "github.com/rs/cors"
    "encoding/json"
)

type Data struct {
    Fruit Fruits
    Veggies Vegetables
}
type Fruits map[string]int
type Vegetables map[string]int

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/fruits_veggies", fruitVeggiesHandler) // 각 요청은 핸들러를 호출합니다.
    
    c := cors.New(cors.Options{
            AllowedOrigins: []string{"http://127.0.0.1:5500"},
        
        AllowCredentials: true,
        // Enable Debugging for testing, consider disabling in production
        Debug: true,
    })
    
    handler := c.Handler(mux)
    http.ListenAndServe("localhost:5000", handler)
    // http.HandleFunc("/fruits_veggies", fruitVeggiesHandler)
    // http.ListenAndServe("localhost:5000", nil)
}

// handler는 요청된 URL r의 Path 구성 요소를 반환합니다.
/* json  */
func fruitVeggiesHandler(w http.ResponseWriter, r *http.Request) {
    // setupResponse(&w, r)
    if (*r).Method == "OPTIONS" {
		return
	}
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