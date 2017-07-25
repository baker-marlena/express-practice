const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE owner RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('owner').insert([
        {name: 'Marlena', password: bcrypt.hashSync('alexIsTheCutest', salt), phone: '5555555555'},
        {name: 'William', password: bcrypt.hashSync('william123', salt), phone: '3333333333'},
        {name: 'Emily', password: bcrypt.hashSync('emily123', salt), phone: '9999999999'},
        {name: 'Amanda', password: bcrypt.hashSync('amanda123', salt), phone:'6666666666'}
      ]);
    });
};
