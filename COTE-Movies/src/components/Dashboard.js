import React from 'react';
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
    button: {
        width: '15%'
        
    }
}));

export default function Dashboard(){
    const classes = useStyles();
    
    //CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX);

    console.log({allChats});

    const topics = Object.keys(allChats);

    //Local State
    const [textValue, changeTextValue] = React.useState('');
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);

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
            <div className={classes.topicsWindow}>
                <List>
                    {
                        topics.map(topic => (
                            <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                <ListItemText primary={topic} />
                            </ListItem>
                        ))
                    }
                    
                </List>
            </div>
            <div className={classes.chatWindow}>
            
                    {
                        allChats[activeTopic].map((chat, i) => (
                            <div className={classes.flex} key={i}>
                                <Chip label={chat.from}/>
                                <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                            </div>
                            
                        ))
                    }
                    
                
            </div>
        </div>
        <div className={classes.flex}>
            <TextField 
            label="Send to chat" 
            variant="outlined"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)} 
            />
            <Button 
                variant='contained' 
                color="primary" 
                className={classes.button}
                onClick={() => {
                    sendChatAction({from: user, msg: textValue, topic: activeTopic})
                    changeTextValue('');
                }}
            >
                Send
            </Button>
        </div>
      </CardContent>
      */
    </Card>
    )
    
}