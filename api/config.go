package main

import (
	"os"
)

type MySqlConfig struct {
	Host string
	Port string
	User string
	Password string
	Database string
}

func NewMySqlConfig() *MySqlConfig {
	return &MySqlConfig {
		Host: os.Getenv("MY_SQL_HOST"),
		Port: os.Getenv("MY_SQL_PORT"),
		User: os.Getenv("MY_SQL_USER"),
		Password: os.Getenv("MY_SQL_PASSWORD"),
		Database: os.Getenv("MY_SQL_DATABASE"),
	}
}
