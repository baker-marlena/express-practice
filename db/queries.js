const knex = require('./knex');


module.exports = {
  getOwnerByPhone: function(phone){
    return knex('owner')
      .where('phone', phone)
      .first();
  },
  addUser: function(user){
    return knex('owner')
      .insert(user, 'id')
        .then(ids =>{
          return ids[0]
        });
      },
  getAllCats: function(){
    return knex.select('*')
      .from('cat');
  },
  addCat: function(cat, id){
    return knex('cat')
      .insert({name:cat.name, breed:cat.breed, age:cat.age, owner_id:id}, 'id')
        .then(ids=>{
          return ids[0]
        });
  },
  getOneCat: function(id){
    return knex('cat')
      .where('id', id);
  },
  updateCat: function(id, cat){
    return knex('cat')
      .where('id', id)
      .update(cat)
      .returning('*')
  },
  removeCat: function(id){
    return knex('cat')
      .where('id', id)
      .del();
  }
}
