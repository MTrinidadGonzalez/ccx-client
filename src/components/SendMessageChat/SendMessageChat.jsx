import {useForm} from 'react-hook-form'
import ChatService from '../../services/chat.service'

const SendMessageChat = ({ chatId }) => {

    const {register,handleSubmit,setValue,reset}= useForm()

    const onSubmit = async (data) => {
      
        const msj={
            message: data.message,
            chatId:chatId
        }
       const chatService = new ChatService();
        const response = await chatService.sendMessage(msj); 
        if (response.data.status === 'success') {
          //alert('Llega el mensaje');
          reset();
        }
      };

    return ( <>
    <form onSubmit={handleSubmit(onSubmit)} className='chatContentContainerChild'>
    <input type="text" placeholder="Mensaje..." required {...register("message")} className='formSendMessageInput'  />
        <input type="submit" value='Enviar' className='btns'  />
    </form>
    </> );
}
 
export default SendMessageChat;