const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });







io.on('connection', function(socket){
    console.log(`a user connected: ${socket.id}`);

    socket.on("join_room", function(data){
        socket.join(data);
        console.log(`User with Id: ${socket.id} joined room: ${data}` )
        
    })
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
        socket.emit(data)
    }) 
    // socket.on('chat message', function(msg){
    //     io.emit('chat message', msg);
    //     console.log('messages: ' + JSON.stringify(msg));
    // });
    socket.on("room_disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
})

server.listen(3001, function(){
    console.log('listening on *:3001');
})