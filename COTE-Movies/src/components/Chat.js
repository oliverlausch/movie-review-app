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
    root: {
        '&$focused': {
           
            filter: 'brightness(1.5)'
        }
    },
    card: {
        //display: 'flex',
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.9) !important'
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
        background: 'white',
        width: '85%',
        
        '& label.Mui-focused': {
            color: '#541d1d',
            filter: 'brightness(1.5)',
            
            
          },
          
    },
    chatBorder: {
        background: 'white',
        display: 'flex',
        marginLeft: '3%',
        width: '87%',
        alignItems: 'center',
        padding: '1.5%',
        borderRadius: '10px',
    },
    nicknameBox: {
        height: '40px !important'
        
    },
    button: {
        width: '15%',
        marginLeft: '5px !important',
        background: 'linear-gradient(to bottom, #303030 0%, #541d1d 80%) !important'
        
    },
    message: {
            
    },
    myMessage: {
        color: 'white !important',
        background: 'linear-gradient(to top,  #0f8d21 0%, #17ab1b 30%) !important',
        boxShadow: '0px 3px 5px black',
        padding: '6px',
        
        borderRadius: '10px',
        margin: '1px',
        marginBottom: '1px',
        textalign: 'justify',
        minWidth: '10px'
    },
    otherMessage: {
        color: 'white !important',
        background: 'linear-gradient(to top, #303030 0%, #702121 30%) !important',
        boxShadow: '0px 3px 5px black',
        padding: '5px',
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '1px',
        marginLeft: '5px',
        marginBottom: '1px',
        
    },
    messageContainer: {
        height: '95%',
        //maxHeight: '350px',
        paddingBottom: '10px',
        overflowY: 'hidden',
        overflowX: 'hidden',
        background: '#f2f2f2',
        borderRadius: '10px'
        
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
        
    },
    TextField: {
        
    }
}));

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
           
      '&.Mui-focused fieldset': {
        borderColor: '#541d1d',
      },
    },
  });

  const MessageTypography = styled(Typography)({
    wordWrap: 'break-word !important',
    maxWidth:'25em'


  });


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
        <Typography className={classes.chatHeader} variant = "h4" sx={{ fontSize: 22 }} color="white">
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
                        
                        <MessageTypography variant='body1' gutterBottom>{messageContent.message}</MessageTypography>
                    </div>
                    
                </div>
                </div>
                );
                })}
            </ScrollToBottom>
            </div>
            
        </div>
        
        <div className={classes.flex}>
            <div className={classes.chatBorder}>
            <CssTextField
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
        </div>
        
        
        </CardContent>
      
    </Card>
    )
}
export default Chat