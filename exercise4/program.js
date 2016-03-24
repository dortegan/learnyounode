var fs = require('fs');

var path = process.argv[2];
var numberOfLines = undefined;

function countNewLines() {
  fs.readFile(path, 'utf8', function (err, lines){
    if (err) {
      return console.log(err);
    }
    numberOfLines = lines.split('\n').length - 1
    console.log(numberOfLines);
  })
}

countNewLines();
