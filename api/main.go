package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"github.com/joho/godotenv"
	"github.com/gorilla/mux" 
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB
var err error

func init() {
	if err := godotenv.Load("../.env"); err != nil {
		log.Print("No .env file found")
	}
}

func findAllRestaurants(w http.ResponseWriter, r *http.Request) {
	restaurants := []Restaurants{}
	db.Find(&restaurants)
	json.NewEncoder(w).Encode(restaurants)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	p := "./README.html"
	w.Header().Set("Content-type", "text/html")
	http.ServeFile(w, r, p)
}

func handleRequests() {
	log.Println("Starting server at http://127.0.0.1:10000/")
	log.Println("Quit the server with CONTROL-C.")

	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/restaurants", findAllRestaurants).Methods("GET")
	
	log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
	mySqlConf := NewMySqlConfig()
	dbUri :=  fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8", mySqlConf.User, mySqlConf.Password, mySqlConf.Host, mySqlConf.Port, mySqlConf.Database)
	db, err = gorm.Open("mysql", dbUri)

	if err != nil {
		log.Println("Connection Failed to Open")
	} else { 
		log.Println("Connection Established")
	}

	handleRequests()
}
