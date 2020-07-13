var mysql = require("mysql");
let connection;

// Heroku vs. MySQL Database
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password", // Add your password
    database: "burger_db", // Add your database
  });
}

// Export
module.exports = connection;
  