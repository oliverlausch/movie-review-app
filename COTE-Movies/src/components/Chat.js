import React, { useEffect } from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/Styles';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRight } from '@mui/system';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { CTX } from './Store';
import io from "socket.io-client";
import Store from "./Store"




const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    nicknameBox: {
        width: '30%'
    },
    button: {
        width: '15%'
        
    }
}));



function Chat({socket, username, room}){
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    

    const sendMessage = async () => {
        if(currentMessage !== "")
        {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            //setCurrentRoom(room);
            
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
            
        }
        
    }

    useEffect(() => {
        // if(currentRoom === room)
        // {
            socket.on("receive_message", (data) =>{
                setMessageList((list) => [...list, data]);
            })
    //     }else{
    //         //socket.emit("room_disconnect");
    //         socket.emit("join_room", room);
    //         setMessageList([]);
    //     }
     }, [socket])

    const classes = useStyles();

    return(
        <Card sx={{ minWidth: 275,  minHeight: 475}}>
      <CardContent>
        <Typography variant = "h2" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chat App
        </Typography>
        <Typography variant="h5" component="div">
          {room}
        </Typography>
        
        <div className={classes.flex}>
        
            <div className={classes.chatWindow}>
            {messageList.map((messageContent) => {
            return(
                <div className={classes.flex} >
                    <Chip label={messageContent.author} />
                    
                    <Typography variant='body1' gutterBottom>{messageContent.message};
                    </Typography>
                </div>
                );
            })}
            
            </div>
            
        </div>
        
        <div className={classes.flex}>
            <TextField 
            label="Send to chat" 
            variant="outlined"
            className={classes.chatBox}
            value={currentMessage}
            onChange={(event) => {
                setCurrentMessage(event.target.value);
                }}
            
            />
            <Button 
                variant='contained' 
                color="primary" 
                className={classes.button}
                onClick={sendMessage}
                
                
            >
                Send
            </Button>
        </div>
        
        
        </CardContent>
      
    </Card>
    )
}
export default Chat