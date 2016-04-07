var http = require('http');
var concatStream = require('concat-stream');
var urls = process.argv.slice(2,5);
var allContent = [];
var count = 0;

function printContent() {
  allContent.forEach(function (content) {
    console.log(content);
  });
}

urls.forEach(function (url, index) {
  http.get(url, function (response) {
    response.pipe(concatStream({ encoding: 'string'}, function (data) {
      allContent[index] = data;
      count++;
      if (count == 3) {
        printContent();
      }
    }));
  });
});
