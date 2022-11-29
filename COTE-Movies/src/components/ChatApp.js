import React, { useEffect } from 'react';
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import { makeStyles } from '@material-ui/core/Styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const socket = io.connect("http://localhost:3001");

const useStyles = makeStyles(theme => ({
  root:{
    margin: '0px',
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green !important',
    },
  } , 
  app:{
      height: '100%',
      
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    joinChatContainer:{
      display: 'inline-grid',
      
      alignItems: 'center',
      justifyItems: 'center'
    },
    button:{
      background: 'linear-gradient(to bottom, #303030 0%, #541d1d 80%) !important',
      marginTop: '5% !important'
    },
    textField:{
      background: 'white',
      '& label.Mui-focused': {
        color: '#541d1d',
        filter: 'brightness(1.5)'
        
        
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: '#541d1d !important',
        filter: 'brightness(1.5)'
      }
      
    }
}));

const ChatApp = (props) =>{
  
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [currentRoom, setCurrentRoom] = useState("");
    const { selectMovie } = props;
    const { movieTitle } = props;
    const [noNickname, setNoNickname] = useState(false);
    
    console.log(selectMovie)
    
    


    useEffect(() => {
      
        
        // socket.emit("room_disconnect", currentRoom, username);
        // console.log("chekc")
        setRoom(selectMovie)
        
        //socket.emit("join_room", room);
        setShowChat(false);
        
    }, [selectMovie])

    const joinRoom = () => {
      
      if (username !== "") {
        
        socket.emit("join_room", room, username);
        
        setShowChat(true);
        setCurrentRoom(room);
        setNoNickname(false);
        
       }
    
      
    }

    const classes = useStyles();
  
    return (
      <div className={classes.app}>
        {!showChat ? (
          <div className={classes.joinChatContainer}>
            <h2>Join The {movieTitle} Chat</h2>
           
            <TextField className= {classes.textField}
            label="Enter Nickname" 
            variant="filled"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            error={noNickname === true}
            id="filled-error"
            
            helperText={noNickname === true ? "Please input a nickname": ""}
            />
            <Button 
                variant='contained' 
                
                className={classes.button}
                onClick={joinRoom}
                
                
            >
                Join A Room
            </Button>
            
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} movieTitle={movieTitle} />
        )}
      </div>
    );
  }
  
  export default ChatApp;