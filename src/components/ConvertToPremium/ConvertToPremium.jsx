/*import  UserService from '../../services/user.service.js'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ConvertToPremium = () => {
    const navigate = useNavigate()
    const onClick =async()=>{
        const userService= new UserService()
        const request= await userService.convertToPremium()
        const response= request.data.status
        if(response === 'success'){
            alert('Debes volver a ingresar con tu nuevo rol!')
            navigate('/login')
        }
      
    }

    return ( <>
    <button onClick={onClick}>Convertirme en usuario premium</button>
    </> );
}
 
export default ConvertToPremium;*/