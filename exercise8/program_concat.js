var concatStream = require('concat-stream');
var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.pipe(concatStream({ encoding: 'string' }, function (data) {
    console.log(data.length);
    console.log(data);
  }));
});
