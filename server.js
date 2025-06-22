const http = require("node:http");
const server = http.createServer(function (req,res){
  res.end("Hello World from Node.js server!");
});

server.listen(7777)
