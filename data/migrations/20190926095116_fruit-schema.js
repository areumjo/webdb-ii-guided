// the changes we want to make
exports.up = function(knex) {
  // create a fruits table
  // define the schema (knex gives schema-builder)
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments();
      tbl.string('name', 128).unique().notNullable();
      tbl.decimal('avgWeightOz');
      tbl.boolean('delicious');
  });
};

// undo the change (forward and backward)
exports.down = function(knex) {
  // drop the fruits table
  return knex.schema.dropTableIfExists('fruits');
};
