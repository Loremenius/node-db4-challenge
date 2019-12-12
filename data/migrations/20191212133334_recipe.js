
exports.up = function(knex) {
  return knex.schema.createTable("recipies",tbl=>{

    tbl.increments();
    tbl.string("name", 255);
    tbl.integer("ingredients_id");
    tbl.integer("instructions_id");


  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipies");
};
