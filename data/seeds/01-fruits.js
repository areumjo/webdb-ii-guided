
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: 'apple', avgWeightOz: 10, delicious: false, color: 'red'},
        {name: 'orange', avgWeightOz: 15, delicious: true, color: 'orange'},
        {name: 'grape', avgWeightOz: 20, delicious: true, color: 'green'}
      ]);
    });
};
