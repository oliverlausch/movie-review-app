import React, { useEffect } from 'react';
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

const Dashboard = (props) => {
    const classes = useStyles();
    const { selectMovie } = props;
    console.log(selectMovie)
    //CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    
    //console.log({allChats});

    const topics = Object.keys(allChats);

    //Local State
    const [textValue, changeTextValue] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [room, setRoom] = React.useState('');
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);


    useEffect(() => {
        setRoom(selectMovie)
    }, [selectMovie])

    const joinRoom = () => {
        if(username !== "" && room !== ""){
            socket = io(':3001');
            socket.emit("join_room", room);
        }
    }

    let socket;

    return(
        <Card sx={{ minWidth: 275,  minHeight: 475}}>
      <CardContent>
        <Typography variant = "h2" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chat App
        </Typography>
        <Typography variant="h5" component="div">
          {activeTopic}
        </Typography>
        
        <div className={classes.flex}>
            {/* <div className={classes.topicsWindow}>
                <List>
                    {
                        topics.map(topic => (
                            <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                <ListItemText primary={topic} />
                            </ListItem>
                        ))
                    }
                    
                </List>
            </div> */}
            <div className={classes.flex}>
                <div className={classes.nicknameBox}>
                    <input type="test" placeholder="Nickname" 
                    onChange={(event) => {
                        setUsername(event.target.value);                     
                    }}/>
                    
                    <button onClick={joinRoom}>Join</button>
                    <chat socket={socket} username={username} room={room}/>
                </div>
            </div>
            <div className={classes.chatWindow}>
            
                    {
                        
                    }
                    
                
            </div>
        </div>
        <div className={classes.flex}>
            <TextField 
            label="Send to chat" 
            variant="outlined"
            className={classes.chatBox}
            value={textValue}
            
            />
            <Button 
                variant='contained' 
                color="primary" 
                className={classes.button}
                
            >
                Send
            </Button>
        </div>
      </CardContent>
      */
    </Card>
    )
    
}
export default Dashboard;