const mysql = require('mysql');
require('dotenv').config(__dirname + '../.env');

const restaurants = JSON.parse(require('fs').readFileSync(__dirname + '/restaurants.json', 'utf8'));

const connection = mysql.createConnection({
  host: process.env.MY_SQL_HOST,
  port: process.env.MY_SQL_PORT,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
});

connection.connect();

restaurants.forEach(restaurant => {
  connection.query('INSERT INTO restaurants SET ?', restaurant, function (error, results, fields) {
    if (error) {
      throw error;
    }
  });
})

connection.end();
