import { useThemeProps } from '@mui/system';
import React from 'react';
import io from 'socket.io-client'
import Dashboard from "./Dashboard"


/*
    {
        from: 'user'
        msg: 'hi'
        topic: 'imdb_ID'
    }
*/


export const CTX = React.createContext();


const initState = {
    general:[
        {from: 'Ed', msg: 'Hello'},
        {from: 'Dave', msg: 'Hello'},
        {from: 'Smith', msg: 'Hello'},
    ]   
}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    
    switch (action.type){
        case 'RECEIVE_MESSAGE':
            
            return{
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg
                    }
                ]
            }
        default:
            return state
    }
}



let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}

const user = "Ed";


export default function Store(props){
    
    const [allChats, dispatch] = React.useReducer(reducer, initState);
    
    if (!socket){
        socket = io(':3001');
        socket.on('chat message', function(msg){
            console.log({msg})
            dispatch({type:'RECEIVE_MESSAGE', payload: msg});
        })
    }
// function Chat({ socket, username, room}){
//         const [currentMessage, setCurrentMessage] = useState("");

//         const sendMessage = async () => {
//             if (currentMessage !== ""){
//                 const messageData = {
//                     room: room,
//                     auther: username,
//                     message: currentMessage,
//                     time: new Date(Date.now).getHours() + ":" + new Date(Date.now).getMinutes()
//                 };

//                 await socket.emit("send_message", messageData);
//             }
//         }
    

    

   
    
    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}