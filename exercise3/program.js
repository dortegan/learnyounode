var fs = require('fs');

var path = process.argv[2];
var fileContent = fs.readFileSync(path, 'utf8');
var numberOfLines = fileContent.split('\n').length - 1

console.log(numberOfLines);
