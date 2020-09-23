const knex = require("knex");

const knexfile = require("./knexfile.js");

// it is working while you add database
const database = "development";

module.exports = knex(knexfile[database]);