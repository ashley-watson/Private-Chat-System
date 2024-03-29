## Simple Web chat interface, JS behind it

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
 socket.on('chat message', function(msg){
  io.emit('chat message', msg);
 });
});

http.listen(31337, function(){
  console.log('listening on *:31337');
});
