
exports.up = function(knex) {
  return knex.schema.createTable('cars2',tbl=>{
      tbl.increments()
      tbl.text('carmake',128)
      tbl.text('carmodel')
      tbl.text('carvin')
      tbl.float('mileage')
  })
};

exports.down = function(knex) {
  
};
