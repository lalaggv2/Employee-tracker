//require mysql
const mysql = require("mysql");

// create the const connection = mysql.createConnection({
// and get all of theconfiguration values from the .env file
//host - localhost
//user
//passw
//datab name

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
});


module.exports = connection;