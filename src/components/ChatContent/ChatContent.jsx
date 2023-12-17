import NavBarsContainer from '../NavBarsContainer/NavBarContainer';
import DeleteMessage from '../DeleteMessage/DeleteMessage';
import SendMessageChat from '../SendMessageChat/SendMessageChat';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChatService from '../../services/chat.service';
import io from 'socket.io-client';

const socket = io('http://localhost:8081');

function ChatContent() {
  const { chatID } = useParams();
  const [chat, setChat] = useState(null);

  const getChat = async () => {
 try{
  const chatService = new ChatService();
  const chatDb = await chatService.getChat(chatID);
  const response = chatDb.data;
  if (response.status === 'success') {
    setChat(response.data);
  }
 }
 catch(error){
  console.log(error)
 }
  }

  useEffect(() => {
    getChat();

    socket.on('getRealTimeChat', (data) => {
     // console.log('getRealTimeChat', data);
      setChat(data);
    });

    return () => {
      socket.off('getRealTimeChat');
    }
  }, [chatID]); 

  return (
    <>
      <NavBarsContainer />
      <div className="chatContentContainer">
        {chat ? (
          <>
            <div className='opositOwnerChatContent'>
              <div className='opositOwnerContainerImg'>
              <img src={chat.opositOwner.imgProfile} alt="" />
              </div>
              <p>{chat.opositOwner.first_name} </p>
              <p>{chat.opositOwner.last_name} </p>
            </div>
            <div className='chatContentContainerChild'>
              {chat.messages.map((message, index) => (
                <p key={index} className='messagesContent'>
                  {message.content}
                  {chat.actualUserId === message.owner && <DeleteMessage mid={message._id} chatID={chat.id} />}
                </p>
              ))}
            </div>
            <SendMessageChat chatId={chat.id} />
          </>
        ) : (
          <h2 className='cargando'>Cargando...</h2>
        )}
      </div>
    </>
  );
}

export default ChatContent;

