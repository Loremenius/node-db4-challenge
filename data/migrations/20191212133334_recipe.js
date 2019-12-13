
exports.up = function(knex) {
  return knex.schema.createTable("recipies",tbl=>{

    tbl.increments();
    tbl.string("name", 255)
        .notNullable();

  }).createTable("instructions",tbl=>{

    tbl.increments();

    tbl.string("instruction", 500)
        .notNullable();

    tbl.integer("step")
        .notNullable();

    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('recipies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    

  }).createTable("ingredients",tbl=>{

    tbl.increments();

    tbl.string("name",255)
        .notNullable();

    tbl.integer("amount")
        .notNullable();

    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('recipies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("ingredients")
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipies");
};
