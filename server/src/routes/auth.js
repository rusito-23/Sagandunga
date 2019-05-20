const jwt = require('express-jwt');

// retrieve token

const getTokenFromHeaders = (req) => {
    const { headers: { authorization }} = req;

    if (authorization) {
        return authorization.split(' ')[0]
    }
    return null;
};

// Authentication options!

const options = {
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders
};

const auth = {
    required: jwt(options),
    optional: jwt(Object.assign({}, options, {credentialsRequired: false}))
};

module.exports = auth;