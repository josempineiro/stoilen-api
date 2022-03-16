var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end({ message: "Hello World" });
  })
  .listen(process.env.PORT);
