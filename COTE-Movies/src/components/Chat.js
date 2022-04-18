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
import { borderRight, margin } from '@mui/system';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import ScrollToBottom from 'react-scroll-to-bottom';



const useStyles = makeStyles(theme => ({
    card: {
        //display: 'flex',
        height: '100%',
        width: '100%'
    },
    content: {
        height: '100%'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        
        "& #youFlex":{
            justifyContent: 'flex-end',
            display: 'flex',
            marginRight: '5px',
            
            
        }
        
    },
    
    chatWindow: {
        display: 'block',
        width: '90%',
        height: '458px',
        
        padding: '20px',
        
    },
    chatBox: {
        
        width: '85%'
    },
    nicknameBox: {
        height: '40px !important'
        
    },
    button: {
        width: '15%',
        marginLeft: '5px !important'
        
    },
    message: {
            
    },
    myMessage: {
        background: '#33cc33',
        
        padding: '6px',
        borderRadius: '10px',
        margin: '1px',
        
    },
    otherMessage: {
        
        padding: '5px',
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '1px',
        marginLeft: '5px'
        
    },
    messageContainer: {
        height: '95%',
        //maxHeight: '350px',
        paddingBottom: '10px',
        overflowY: 'hidden',
        overflowX: 'hidden',
        background: '#f2f2f2',
        
    },
    myNickname: {
        display: 'none'
    },
    otherNickname: {
        padding: '5px'
    },
    chatHeader: {
        height: '5%',
        
        alignItems: 'center',
        
    }
}));



function Chat({socket, username, room, movieTitle}){
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    
    const sendMessage = async () => {
        if(currentMessage !== "")
        {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                
            };
            //setCurrentRoom(room);
            
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
            
        }
        
    }

    useEffect(() => {
                socket.on("receive_message", (data) =>{
                setMessageList((list) => [...list, data]);
            })
            socket.on("join_message", (Author) =>{
                
                const joinMessageData = {
                    room: room,
                    author: "System:",
                    message: Author + " has joined the " + movieTitle + " chat"
                }
                setMessageList((list) => [...list, joinMessageData]);
                
            })
            socket.on("leave_message", (username) => {
                const leaveMessageData = {
                    room: room,
                    author: "System:",
                    message: username + " has left the " + movieTitle + " chat"
                }
                setMessageList((list) => [...list, leaveMessageData]);
            })
     }, [movieTitle, room, socket])

    const classes = useStyles();

    return(
        //<Card sx={{ minWidth: '100%', minHeight: '100%', flex: '2' }}></Card>
        <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.chatHeader} variant = "h4" sx={{ fontSize: 22 }} color="text.secondary">
          {movieTitle} Chat
        </Typography>
        
        
        <div className={classes.flex}>
        
            <div className={classes.chatWindow}>
            <ScrollToBottom className={classes.messageContainer}>
                {messageList.map((messageContent) => {
                 return(
                <div id={username === messageContent.author? "youFlex" : "otherFlex"}>
                <div className={classes.flex} >
                    <div className= {username === messageContent.author? classes.myNickname : classes.otherNickname}>
                        <div className={classes.nicknameBox}>
                            
                            <Chip avatar={<Avatar>{messageContent.author[0]}</Avatar>}label={messageContent.author} className={classes.nicknameBox}/>
                        </div>
                    </div>
                    
                    <div className={username === messageContent.author? classes.myMessage : classes.otherMessage} >
                        
                        <Typography variant='body1' gutterBottom>{messageContent.message}</Typography>
                    </div>
                    
                </div>
                </div>
                );
                })}
            </ScrollToBottom>
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