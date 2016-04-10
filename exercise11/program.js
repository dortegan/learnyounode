var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (request, response) {
  src = fs.createReadStream(filePath, { encoding: 'utf8' });
  src.pipe(response);
});
server.listen(port);
