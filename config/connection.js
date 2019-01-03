// Setting up MySQL connection.
var mysql = require("mysql");
var connection;
// If JAWS DB exists then use this as connection or else use the local instance
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
})
};
// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as ID ${connection.threadId}`);
});
// Export connection for orm to use.
module.exports = connection;