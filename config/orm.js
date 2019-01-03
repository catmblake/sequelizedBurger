// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objectToSql(object) {
  var arr = [];

  // for-in loop 
  for (var key in object) {
    var value = object[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
};
// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, callback) {
      var queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    insertOne: function(table, column, values, callback) {
      var queryString = `INSERT INTO ${table}`;
  
      queryString += ` (`;
      queryString += column.toString();
      queryString += `) `;
      queryString += `VALUES (`;
      queryString += printQuestionMarks(values.length);
      queryString += `);`;
  
      connection.query(queryString, values, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    updateOne: function(table, objectColumnValues, condition, callback) {
      var queryString = `UPDATE ${table}`;
  
      queryString += ` SET `;
      queryString += objectToSql(objectColumnValues);
      queryString += ` WHERE `;
      queryString += `${condition};`;

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
  };
  // Export the orm object for the model.
  module.exports = orm;