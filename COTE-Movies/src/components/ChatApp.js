import React, { useEffect } from 'react';
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

const ChatApp = (props) =>{
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [currentRoom, setCurrentRoom] = useState("");
    const { selectMovie } = props;
    console.log(selectMovie)
    
    useEffect(() => {
        setRoom(selectMovie)
        socket.emit("join_room", room);
        setShowChat(false);
    }, [selectMovie, room])

    const joinRoom = () => {
      if (username !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
        setCurrentRoom(room)
       }
      else if (username !== "" && currentRoom !== room)
      {
        socket.emit("room_disconnect", currentRoom)
        socket.emit("join_room", room);
        setShowChat(true);
        setCurrentRoom(room);
      }
    }

    
  
    return (
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    );
  }
  
  export default ChatApp;