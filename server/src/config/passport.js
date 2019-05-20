const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const custom = require('./custom');

const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'user[auth]',
    passwordField: 'user[password]'
}, (auth, password, done) => {
    User.findOne({ $or: [{username: auth}, {email: auth}] })
    .then((user) => {
        if(!user || !user.validatePassword(password)) {
            return done(null, false, custom.Error.Unauthorized())
        }

        return done(null, user);
    }).catch(done)
}));
