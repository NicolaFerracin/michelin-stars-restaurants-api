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
