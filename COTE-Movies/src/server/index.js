var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('app.js');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('messages: ' + JSON.stringify(msg));
    })
})

http.listen(3000, function(){
    console.log('listening on *:3001');
})