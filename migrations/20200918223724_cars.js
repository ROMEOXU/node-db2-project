
exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl=>{
        tbl.increments()
        tbl.text('make',125).notNullable()
        tbl.text('model').notNullable()
  })
};

exports.down = function(knex) {
  
};
