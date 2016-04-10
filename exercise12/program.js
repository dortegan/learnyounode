var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

function toUpperCase(stream, outStream) {
  stream.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(outStream);
}

server = http.createServer(function (request, response) {
  if (request.method != 'POST') {
    return response.end('The request should be POST');
  }
  toUpperCase(request, response);
});
server.listen(port);
