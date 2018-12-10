const express = require("express");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var fs = require('fs');

app.use(express.static("public"));

io.on('connection', function(socket) {
  socket.on('chat photo', function(msg) {
    io.emit('chat photo', msg);
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
