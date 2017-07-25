const knex = require('./knex');


module.exports = {
  getOwnerByPhone: function(phone){
    return knex('owner').where('phone', phone).first()
  },
  addUser: function(user){
    return knex('owner').insert(user, 'id')
      .then(ids =>{
        return ids[0]
      })
    }
  }
