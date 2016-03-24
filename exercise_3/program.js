var fs = require('fs');

var path = process.argv[2];
var buffer = fs.readFileSync(path);
var bufferToString = buffer.toString();
var numberOfLines = bufferToString.split('\n').length - 1
console.log(numberOfLines);
