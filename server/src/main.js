
const db = require('./db.js');


function main() {
    db.connect();
    require('./api.js')();
} main();
