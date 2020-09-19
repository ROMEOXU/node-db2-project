
exports.seed = async function(knex) {
  await knex('cars2').truncate();
  await knex('cars2').insert([{carmake:"saturn",
  carmodel:"iron",
  carVin:"123h",
  mileage:180000},
  {carmake:"toyota",
  carmodel:"lux",
  carVin:"364v",
  mileage:60000}])
};
