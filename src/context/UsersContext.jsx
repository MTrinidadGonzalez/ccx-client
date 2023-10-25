import  UserService from '../services/user.service'
import { createContext } from 'react'
import { useState,useEffect } from 'react'
import io from 'socket.io-client'

const socket= io('http://localhost:8081') 

export const UsersContext=createContext({})
export const UsersProvider= ({children}) => {
    
    const [users,setUsers]= useState([])

    useEffect(()=>{
        const getUser= async()=>{
            const userService= new UserService()
            const response= await userService.getUsers()
            const result= await response.data.payload
            
            if(response.data.status === 'success'){
              setUsers(result)
            }
           
        }
        getUser()
    },[])
    
    
    return ( <>
   <UsersContext.Provider value={{users}}>
    {children}
   </UsersContext.Provider>
    </> );
}
 

