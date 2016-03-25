var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, callback) {
  fs.readdir(dirPath, function listFilesByExtension(err, filesList) {
    if (err) {
      return callback(err);
    }
    var filteredList = filesList.filter(function (file) {
      var fileExtension = path.extname(file);
      return '.' + extension === fileExtension;
    })
    callback(err, filteredList);
  })
}
