var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, function listFilesByExtension(err, filesList) {
  if (err) {
    throw err
  }
  filesList.forEach(function (file) {
    var fileExtension = path.extname(file);
    if ('.' + extension === fileExtension) {
      console.log(file);
    }
  })
})
