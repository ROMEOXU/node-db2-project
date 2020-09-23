
exports.up = async function(knex) {
  await knex.schema.alterTable('cars2',tbl=>{
      tbl.text('transmission')
      tbl.text('title')
  })
};

exports.down = function(knex) {
  
};
