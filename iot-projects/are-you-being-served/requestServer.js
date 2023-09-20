// requestServer.js file

const http = require("http");
const request = require("request");

var port = 6768;

http.createserver(function (req, res) {
    request("https://Sypher7777.github.io", function (error, response, body) {
      if (!body || !response || (error === null && response.statusCode !== 200)) {
        res.end("bad URL\n");
        return;

      }
      if (res.statusCode === 200 && !error === true){
        res.writeHead("Content-Type" : "text/html")
    }
    });

  }).listen(6768);
