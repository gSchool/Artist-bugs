
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', function(table){
    table.increments(),
    table.string('name'),
    table.string('painting'),
    table.string('medium'),
    table.text('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
