import React, { useEffect, useState } from 'react';

import ChatService from '../../services/chat.service';
import ChatContent from '../ChatContent/ChatContent';
import { UsersContext } from '../../context/UsersContext';
import UserService from '../../services/user.service'
import io from 'socket.io-client'
import { Link } from 'react-router-dom';


const socket= io('http://localhost:8081') 


const UserChats = () => {
  const [userChats, setUserChats] = useState([]);
  const [showChatsList, setShowChatsList] = useState(false);

  const getUserChats = async () => {
    const chatSevice=new ChatService()
    const getChats= await chatSevice.getUserChats()
    if(getChats.data.status === 'success'){
      socket.on('getRealTimeUserChats',(data)=>{
       //  console.log('getRealTimeUserChats',data)
         setUserChats(data)
     })
      
    }
  };

  useEffect(() => {
    getUserChats();
  }, []);

  const toggleChatsList = () => {
    setShowChatsList(!showChatsList);
  };

  return (
  <>
    <div className='chatsListContainer'>
      <button className='itemsNavGral btnGetUserChats' onClick={toggleChatsList}>
        Chats <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </button>
      <div
        className={`userChatsList ${showChatsList ? '' : 'displayNoneChat'}`}
        id='userChatsList'
      >
        {userChats.map((chat) => (
          <Link to={`/chat/${chat.id}`} key={chat.id} className='itemsNavGral linksChats'>
            <img src={chat.opositOwner.imgProfile} alt={`${chat.opositOwner.first_name} ${chat.opositOwner.last_name}`} />
            {chat.opositOwner.first_name} {chat.opositOwner.last_name}
          </Link>
        ))}
      </div>
    </div>
  </>
  );
};

export default UserChats;


/*import NavBarsContainer from '../NavBarsContainer/NavBarContainer';
import ChatService from '../../services/chat.service';

import ChatContent from '../ChatContent/ChatContent';
import { UsersContext } from '../../context/UsersContext';
import UserService from '../../services/user.service'
import io from 'socket.io-client'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';


const socket= io('http://localhost:8081') 

const UserChats = () => {
   
    const[userChats,setUserChats]=useState([])
    const [showChatsList,setShowChatsList]=useState(false)

    const getUserChats=async()=>{
    const chatSevice=new ChatService()
    const getChats= await chatSevice.getUserChats()
    if(getChats.data.status === 'success'){
      socket.on('getRealTimeUserChats',(data)=>{
         console.log('getRealTimeUserChats',data)
         setUserChats(data)
     })
      
    }
  }
 
  useEffect(()=>{
    getUserChats()
  },[])

    return (
        <>
         <div className='chatsListContainer'>
         <button className='itemsNavGral btnGetUserChats'>Chats</button>
         <div className='userChatsList' id='userChatsList'>
        {userChats.map((chat)=>(
        <Link to={`/chat/${chat.id}`} key={chat.id}  className='itemsNavGral linksChats'> <img src={chat.opositOwner.imgProfile} alt={`${chat.opositOwner.first_name} ${chat.opositOwner.last_name} `} />  {chat.opositOwner.first_name} {chat.opositOwner.last_name} </Link>
      ))}
      </div>
    </div>
        </>
    );
}

export default UserChats;*/