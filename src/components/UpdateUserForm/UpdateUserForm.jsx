import UserService from '../../services/user.service'
import { useState,useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {UserContext} from '../../context/UserContext'

import  NavBarsContainer from '../NavBarsContainer/NavBarContainer'
import Swal from 'sweetalert2';


const UpdateUserForm = () => {
    const {user}= useContext(UserContext)
    const navigate = useNavigate()
    const {register,handleSubmit,setValue}= useForm() 
   
  
    const onSubmit=async(data)=>{
        const updateUser = {
            first_name: data.first_name || user.first_name,
            last_name: data.last_name || user.last_name,
            alias: data.alias || user.alias,
            email: data.email || user.email,
            zona: data.zona || user.zona,
          };
        const userService= new UserService()
        const response=await userService.updateUser(updateUser)
        const result=response.data
        if(result.status === 'success'){
          Swal.fire({
            title: 'Datos modificados!',
            icon: 'success',
            showCancelButton: false,
            background: 'white',
            color: ' rgb(16,26,27)',
            timer: 2000
          });
            navigate('/home')
        }
    }

    return ( <>
    < NavBarsContainer/>
    <div className='generalContainers'>

    <div className='divContainerForms'>
    <form onSubmit={handleSubmit(onSubmit)} className='forms'>
    <p>Nombre:</p>
    <input type="text" placeholder={user.first_name} {...register("first_name")} />
    <p>Apellido:</p>
    <input type="text" placeholder={user.last_name}  {...register("last_name")}/>
    <p>Alias:</p>
    <input type="text" placeholder={user.alias} id="alias" {...register("alias")}  />
    <p>Eamil:</p>
    <input type="email" placeholder={user.email} {...register("email")}/>
    <p>Barrio:</p>
    <label htmlFor="zona">Zona:</label>
          <select id="zona" {...register("zona")} required={true}>
            <option value="">Selecciona una zona</option>
            <option value="Paseo Rivera Shopping">Paseo Rivera Shopping (Argüello)</option>
            <option value="Shopping Nuevo Centro">Shopping Nuevo Centro (Doarte Quirós)</option>
            <option value="Cordoba Shopping">Córdoba Shopping (Villa cabrera)</option>
            <option value="Dinosaurio Mall Ruta20">Dinosaurio Mall Ruta 20 (Av. Fuerza Aéra)</option>
            <option value="Patio Olmos">Patio Olmos (Nueva Córdoba)</option>
          </select>
    <input type="submit" value='Enviar cambios'  className='btns'/>
   </form>
   </div>



    </div>
    </> );
}
 
export default UpdateUserForm;