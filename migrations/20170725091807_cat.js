
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cat', table=>{
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('breed');
    table.integer('age');
    table.integer('owner_id').references('owner.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {

};
