const express = require("express");
const http = require("http");
const app = express();
const io = require("socket.io")(server);

const server = http.Server(app);

app.use(express.static("client"));

io.on("connection", function(socket) {
    socket.on("message", function(msg) {
        io.emit("message", msg);
    });
});

server.listen(8080, function() {
    console.log("Chat server running");
});
