// Import the ORM to interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(column, values, callback) {
    orm.insertOne("burgers", column, values, function(res) {
      callback(res);
    });
  },
  updateOne: function(objectColumnValues, condition, callback) {
    orm.updateOne("burgers", objectColumnValues, condition, function(res) {
      callback(res);
    });
  },
};

// Export the database functions for the burgers_controller.
module.exports = burger;