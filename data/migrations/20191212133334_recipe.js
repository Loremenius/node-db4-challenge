
exports.up = function(knex) {
  return knex.schema.createTable("recipies",tbl=>{

    tbl.increments();
    tbl.string("name", 255);

  }).createTable("instructions",tbl=>{

    tbl.increments();
    tbl.string("instruction", 500);
    tbl.integer("step");
    tbl.integer("recipe_id");
    

  }).createTable("ingredients",tbl=>{

    tbl.increments();
    tbl.string("name",255);
    tbl.integer("amount");
    tbl.integer("recipe_id");

  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("ingredients")
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipies");
};
