const bcrypt = require('bcrypt');


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

module.exports = {validString, validUser, formatPhone, validLogin}
