var bufferList = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.pipe(bufferList(function (err, data) {
    if (err) {
      return console.error(err);
    }
    var stringData = data.toString();
    console.log(stringData.length);
    console.log(stringData);
  }));
});
