
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', table=>{
    table.increments('id').primary();
    table.text('name');
    table.text('password').notNullable();
    table.text('phone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owner')
};
