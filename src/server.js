const http = require("http");
const express = require("express");
var path = require("path");
const app = express();
const PORT = 8080;
const socketIo = require("socket.io");
const fs = require("fs");

const server = http.Server(app).listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
// const io = socketIo(server);
// const clients = {};

// io.on("connection", function (socket) {
//   let id = socket.id;
//   console.log(id);
// });
//app.use(express.static(__dirname + "/../public/"));
//app.use(express.static(__dirname + "/../node_modules/"));

app.get("/test", (req, res) => {
  res.send("Hello World");
});
app.get("/create", (req, res) => {
  res.send("create room");
});
// app.get("/", (req, res) => {
//   // const stream = fs.createReadStream(__dirname + "/../public/index.html");
//   // console.log(stream);
//   // stream.pipe(res);
// });
