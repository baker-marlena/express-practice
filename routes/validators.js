const bcrypt = require('bcrypt');
const queries = require('../db/queries')


function validString(string) {
    return typeof string == 'string' && string.trim() != '';
  }
function validUser(user) {
    return validString(user.name) && validString(user.password) && validString(user.phone)
  }
function formatPhone(phone){
  return phone.replace(/[^0-9]/g, "")
}
function validLogin(user){
  return validString(user.phone) && validString(user.password);
}
function validCat(cat) {
  return validString(cat.name) && validString(cat.breed) && validString(cat.age);
}

module.exports = {validString, validUser, formatPhone, validLogin, validCat}
