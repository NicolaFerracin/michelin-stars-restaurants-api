package main

type Restaurants struct {
	Id int `json:"id"`
	Rating string `json:"rating"`
	Year string `json:"year"`
	Img string `json:"img"`
	Name string `json:"name"`
	Link string `json:"link"`
	Location string `json:"location"`
	Type string `json:"type"`
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
}
