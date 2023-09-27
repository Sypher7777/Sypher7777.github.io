// requestServer.js file

var args = process.argv.slice(2);

const http = require("http");
const request = require("request");
  
var port = 6768;

http.createServer(function (req, res) {
  var url = args[0] ? args[0] : "http://127.0.0.1:5502/portfolio.html";
    request(url, function (error, response, body) {
      console.log('hit')
      if ( !body || !response || (error === null && response.statusCode !== 200)) {
        res.end("bad URL\n");
        return;

      }
      if (res.statusCode === 200 && !error === true){
        res.writeHead(200, { "Content-Type" : "text/html"})
        res.end(body)
        return
    }
    else if (response.statusCode !== 200){
      res.writeHead(response.statusCode, {"Content-Type" : "text/plain"})
      res.end(error.toString())
      // error.toString(error)
      return
    }

    });

  }).listen(6768);
