import React, { useEffect, useState } from 'react';
import ChatService from '../../services/chat.service';
import ChatContent from '../ChatContent/ChatContent';
import { UsersContext } from '../../context/UsersContext';
import UserService from '../../services/user.service'
import { Link } from 'react-router-dom';
import io from 'socket.io-client'

const socket= io('https://ccx-server.onrender.com') 

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
            <div className='linksChatsImgContainer'>
            <img src={chat.opositOwner.imgProfile} alt={`${chat.opositOwner.first_name} ${chat.opositOwner.last_name}`} />
            </div>
            {chat.opositOwner.first_name} {chat.opositOwner.last_name}
          </Link>
        ))}
      </div>
    </div>
  </>
  );
};

export default UserChats;
