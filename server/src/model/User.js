
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

module.exports = {
    User: User
}
