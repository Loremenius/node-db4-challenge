
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Can(s) of Spam', amount:1, recipe_id:1},
        { name: 'Cups(s) of rice', amount:5, recipe_id:1},
        { name: 'Squares of Seaweed', amount:7, recipe_id:1},
        { name: 'Can(s) of tomatoe sauce', amount:1, recipe_id:2},
        { name: 'Pack(s) of peperoni', amount:1, recipe_id:2},
        { name: 'Bag(s) of cheese', amount:1, recipe_id:2},
        { name: 'Pizza dough', amount:2, recipe_id:2},
        { name: 'Bag(s) of Tortilla Chips', amount:2, recipe_id:3},
        { name: 'Bag(s) of Cheese', amount:3, recipe_id:3},
        { name: 'Can(s) of Black Olives', amount:4, recipe_id:3}
      ]);
    });
};
