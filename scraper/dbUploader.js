const mysql = require('mysql');
require('dotenv').config(__dirname + '../.env');

class DBUploader {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MY_SQL_HOST,
      port: process.env.MY_SQL_PORT,
      user: process.env.MY_SQL_USER,
      password: process.env.MY_SQL_PASSWORD,
      database: process.env.MY_SQL_DATABASE,
    });
  }

  connect = () => this.connection.connect();

  disconnect = () => this.connection.end();

  clearTable = () => {
    this.connection.query(`DELETE FROM ${process.env.MY_SQL_TABLE}`, error => {
      if (error) {
        throw error;
      }
    });
  }

  resetAutoIncrement = () => {
    this.connection.query(`ALTER TABLE ${process.env.MY_SQL_TABLE} AUTO_INCREMENT = 1`, error => {
      if (error) {
        throw error;
      }
    });
  }

  uploadRestaurants = restaurants => {
    restaurants.forEach(restaurant => {
      this.connection.query(`INSERT INTO ${process.env.MY_SQL_TABLE} SET ?`, restaurant, error => {
        if (error) {
          throw error;
        }
      });
    })
  }
}

module.exports = DBUploader;
