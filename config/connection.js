var mysql = require("mysql");

let connection;

if(process.env.URL) {
  connection = mysql.createConnection(process.env.URL);
  
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db",
  });
}


module.exports = connection;
  