import {useForm} from 'react-hook-form'
import UserService from '../../services/user.service'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Login = () => {
    const navigate = useNavigate()
    const{register,handleSubmit}=useForm()
    
    const onSubmit=async(data)=>{
        const user={       
            email:data.email,
            password:data.password
        }
        const userService= new UserService()
        const response=await userService.loginUser(user)
        const result= response.data.status
        if(result === 'success'){
         navigate('/home')
         }
         if(result === 'error'){
          console.log(response.data.error)
         }      
    }
    return ( <>
  
  <div className='divContainerForms'>
    <div className='forms'>
    <form onSubmit={handleSubmit(onSubmit)} className='forms'>
        <input type="text" placeholder='correo@...' {...register('email', {required: true}) } className='inputs'   />
        <input type="password" placeholder="Contraseña" {...register('password', {required:true})} className='inputs'  />
        <input type="submit" value='Entrar' className='btns' />
    </form>
    <Link to='/restorePassword' className='btns-links'>¿Olvidaste tu contraseña? </Link>
    <Link to='/register' className='btns'> CREAR CUENTA</Link>
    
    </div>  
  </div>
    
    </> );
}
 
export default Login;