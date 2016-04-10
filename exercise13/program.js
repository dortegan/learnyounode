var http = require('http');
var url = require('url');
var port = process.argv[2];

function parseTime(date) {
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  }
}

function parseUnixTime(date) {
  return {
    'unixtime': date.getTime()
  }
}

server = http.createServer(function (request, response) {
 if (request.method != 'GET') {
   return response.end('The request should be GET');
 }
 response.writeHead(200, { 'Content-Type': 'application/json' });
 var requestUrl = url.parse(request.url, true);
 var isoDate = requestUrl['query']['iso'];
 if (requestUrl['pathname'] == '/api/parsetime') {
   response.end(JSON.stringify(parseTime(new Date(isoDate))));
 } else if(requestUrl['pathname'] == '/api/unixtime'){
   response.end(JSON.stringify(parseUnixTime(new Date(isoDate))));
 } else {
   respond.writeHead(404);
   response.end();
 }
});
server.listen(port);
