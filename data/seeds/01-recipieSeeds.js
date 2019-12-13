
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        { name: 'spam musubi' },
        { name: 'pizza' },
        { name: 'nachos' }
      ]);
    });
};
