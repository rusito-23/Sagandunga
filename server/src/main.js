
const db = require('./config/db.js');


function main() {
    db.connect();
    require('./config/api.js')();
} main();
