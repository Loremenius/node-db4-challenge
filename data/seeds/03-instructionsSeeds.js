
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction: 'Place Musubi maker on top of seaweed', step: 1, recipe_id: 1 },
        { instruction: 'place some rice in musubi maker and press down with flat surface given with musubi maker', step: 2, recipe_id: 1 },
        { instruction: 'place spam ontop of rice', step: 3, recipe_id: 1 },
        { instruction: 'place more rice on top of spam and press down', step: 4, recipe_id: 1 },
        { instruction: 'press down with the flat surface and pull musubi make up to remove it', step: 5, recipe_id: 1 },
        { instruction: 'wrap seaweed around rice and spam', step: 6, recipe_id: 1 },
        { instruction: 'cut down the middle to split the two spam musubis', step: 7, recipe_id: 1 },
        { instruction: 'Partially cook pizza dough by placing the dough in the oven', step: 1, recipe_id: 2 },
        { instruction: 'remove pizza dough from oven and place toppings', step: 2, recipe_id: 2 },
        { instruction: 'place pizza back into oven to finish cooking', step: 3, recipe_id: 2 },
        { instruction: 'Place cheese in a bowl and melt the cheese', step: 1, recipe_id: 3 },
        { instruction: 'Place chips on a plate and place melted cheese on top', step: 2, recipe_id: 3 },
        { instruction: 'Place other toppings such as olive on top', step: 3, recipe_id: 3 }
      ]);
    });
};
