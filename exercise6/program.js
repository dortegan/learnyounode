var filesFilter = require('./files_filter');
var dirPath = process.argv[2];
var extension = process.argv[3];

filesFilter(dirPath, extension, function (err, filesList) {
  if (err) {
    console.log('There was an error:', err);
  }
  filesList.forEach(function (file) {
    console.log(file);
  })
});
