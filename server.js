const http = require("http");
const app = require("./app");
const port = 3000;

// app.js is insert in here and it is used as middleware
const server = http.createServer(app);

server.listen(port);
