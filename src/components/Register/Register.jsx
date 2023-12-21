import {useForm} from 'react-hook-form'
import UserService from '../../services/user.service'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    
   const {register,handleSubmit, reset}= useForm() 
   const navigate = useNavigate()

   const onSubmit=async(data)=>{
    const user={
        first_name: data.first_name,
        last_name:data.last_name,
        alias: data.alias,
        email:data.email,
        password:data.password,
        zona: data.zona
    }
    const userService= new UserService()
    const response=await userService.createUser(user)
    const result=response.data
    if(result.status === 'success'){
      
      reset()
      navigate('/login')
     
    }
   if(result.status === 'error'){
    if(result.error === 'Usuario ya registrado'){
        alert('Correo ya registrado')
    }
   }
}

    return ( <>
    <div  className='container-body-register'> 
    <div className='divContainerForms'>
    <form onSubmit={handleSubmit(onSubmit)} className='forms'>
        <h2>Registrarme !</h2>
        <div className='containerSelectsForms'> 
        <input type="text" placeholder="Nombre" required={true} {...register("first_name")} />
        <input type="text" placeholder="Apellido" required={true} {...register("last_name")}/>
        <label htmlFor="alias">El Alias te permite ser encontrado por otros usuarios:</label>
        <input type="text" placeholder="Alias" id="alias" {...register("alias")} required={true} />
       <input type="email" placeholder="correo@gmail.com" required={true} {...register("email")}/>
       <input type="password" placeholder="Contraseña" required={true} {...register("password")}/>
        </div>
      
       <label htmlFor="zona">Zona:</label>
          <select id="zona" {...register("zona")} required={true} className='selects'>
            <option value="">Selecciona una zona</option>
            <option value="Paseo Rivera Shopping">Paseo Rivera Shopping (Argüello)</option>
            <option value="Shopping Nuevo Centro">Shopping Nuevo Centro (Doarte Quirós)</option>
            <option value="Cordoba Shopping">Córdoba Shopping (Villa cabrera)</option>
            <option value="Dinosaurio Mall Ruta20">Dinosaurio Mall Ruta 20 (Av. Fuerza Aéra)</option>
            <option value="Patio Olmos">Patio Olmos (Nueva Córdoba)</option>
          </select>

        <input type="submit" value='Registrar' className='btns' />
    </form>
    </div>


    </div>
    </> );
}
 
export default Register;