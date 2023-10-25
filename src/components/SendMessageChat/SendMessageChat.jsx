import {useForm} from 'react-hook-form'
import ChatService from '../../services/chat.service'

const SendMessageChat = ({ chatId }) => {

    const {register,handleSubmit,setValue}= useForm()

    const onSubmit = async (data) => {
      
        const msj={
            message: data.message,
            chatId:chatId
        }
       const chatService = new ChatService();
        const response = await chatService.sendMessage(msj); 
       /* if (response.data.status === 'success') {
          //alert('Llega el mensaje');
        }*/
      };

    return ( <>
    <form onSubmit={handleSubmit(onSubmit)} className='formSendMessage '>
    <input type="text" placeholder="Mensaje..." required {...register("message")} className='formSendMessageInput'  />
        <input type="submit" value='Enviar' className='btns'  />
    </form>
    </> );
}
 
export default SendMessageChat;