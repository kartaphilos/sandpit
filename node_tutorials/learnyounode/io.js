var fs = require('fs');

var fsstr = fs.readFileSync(process.argv[2]).toString();
var fsarray = fsstr.split('\n');
console.log(fsarray.length-1);
