
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE cat RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('cat').insert([
        {name: 'Alex', breed: 'American Shorthair', age: 12, owner_id: 1},
        {name: 'Tuki', breed: 'Russian Gray', age: 8, owner_id: 2},
        {name: 'Mira', breed: 'American Shorthair', age: 13, owner_id: 3},
        {name: 'Anna', breed: 'Longhair', age: 14, owner_id: 4},
        {name: 'Maya', breed: 'Longhair', age: 5, owner_id: 4},
      ]);
    });
};
