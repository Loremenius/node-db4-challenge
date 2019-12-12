
exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists("ingredients")
    .createTable("ingredients",tbl=>{
  
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

      tbl.integer("ingredientType")
        .notNullable();
  
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("ingredients");
  };
  