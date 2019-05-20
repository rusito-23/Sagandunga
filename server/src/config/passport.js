
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const custom = require('./custom');

const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]'
}, (email, password, done) => {
    User.findOne({ email })
    .then((user) => {
        if(!user || !user.validatePassword(password)) {
            return done(null, false, custom.Error.Unauthorized())
        }

        return done(null, user);
    }).catch(done)
}));
