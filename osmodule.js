const os = require('os');
const path = require('path');

console.log(os.hostname());
console.log( path.extname(__filename) );