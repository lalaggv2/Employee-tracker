//require mysql

const connection = mysql.createConnection({
  //host - localhost
  //user
  //passw
  //datab name

});

connection.connect();

module.exports = connection;