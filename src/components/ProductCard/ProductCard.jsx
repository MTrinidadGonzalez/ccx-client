import ProductsService from '../../services/products.service'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import ChatService from '../../services/chat.service'
import { useEffect,useState } from 'react'
import UserService from '../../services/user.service'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ id, owner,title, description, price, category, talle, status, color, img }) => {

  const navigate = useNavigate()
  const [user,setUser]=useState({})
    
  useEffect(()=>{
      const getUser=async()=>{
          const userService= new UserService()
          const userDb= await userService.getUserProfile()
          const response= userDb.data
          setUser({email: response.payload.email})
          
      }
      getUser()
     
  },[])

    const handleRequestProduct = async(id) => {
      if(owner === user.email){
       return  Swal.fire({
          title: 'No pueder solicitar tu propio producto',
          icon: 'error',
          timer:3000,
          background: 'white',
          color: ' rgb(16,26,17)',
        });
      }
      else{
        const chatService= new ChatService()
        const requesProduct=await chatService.requestProduct(id)
        const response= requesProduct.data
        //console.log(response)
        if(response.status === 'success'){
       
          const chatID = response.chatID;
          console.log('chatID llega al front:', chatID)
          const navigateToChat = () => {
            navigate(`/chat/${chatID}`)
          };
          return Swal.fire({
            title: 'Producto solicitado',
            text: '¿Deseas ver el chat?',
            icon: 'success',
            showConfirmButton: true, 
            showCloseButton: true,    
            confirmButtonText: 'Ver Chat',
            confirmButtonColor: 'rgb(16, 26, 17)', 
            background: 'white',
            color: 'rgb(16, 26, 17)',
          }).then((result) => {
            if (result.isConfirmed) {
              navigateToChat(); 
            }
          });
           
        }
      }
    }
  
    return (
      <>
        <div className="productsCard">
          <Link to={`/productDetail/${id}`}>
            <img src={img} alt={description} className="productsImgCard" loading='lazy' />
          </Link>
          <p>Categoría:{category}</p>
          <p>{description} .</p>
          <p>Talle: {talle}- Color: {color} </p>
          <p>$ {price}</p>
          <p>Estado: {status}</p>
          <button className='btns' onClick={() => handleRequestProduct(id)}>Solicitar producto</button>
        </div>
      </>
    );
  }
  
  export default ProductCard;

