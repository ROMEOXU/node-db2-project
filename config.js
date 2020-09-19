const knex = require("knex")({client: 'pg'});
const knexfile = require("./knexfile.js");
module.exports = knex(knexfile)