import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthTokenContext = createContext({});

export const AuthTokenProvider = ({ children }) => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState(false);

    useEffect(() => {
        const getAuthToken = async () => {
            const authTokenCookie = document.cookie.split('; ').find(row => row.startsWith('authToken='));

            if (!authTokenCookie) {
                const currentPath = window.location.pathname;
                if (currentPath !== '/' && currentPath !== '/register' && currentPath !== '/login') {
                    navigate('/login');
                }
            } else {
                setAuthToken(true);
            }
        }
        
        getAuthToken();
    }, []);

    useEffect(() => {
        if (authToken) {
            navigate('/home');
        }
    }, [authToken]);

    return (
        <AuthTokenContext.Provider value={{ authToken }}>
            {children}
        </AuthTokenContext.Provider>
    );
}

/*import UserService from '../services/user.service'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthTokenContext = createContext({})
export const AuthTokenProvider = ({ children }) => {
    const navigate = useNavigate()
    const [authToken, setAuthToken] = useState(false)

    useEffect(() => {
        const getAuthToken = async () => {
         
        const authTokenCookie = document.cookie.split('; ').find(row => row.startsWith('authToken='));
        // console.log(authTokenCookie)
        if(!authTokenCookie){
         const currentPath = window.location.pathname;
        if (currentPath !== '/' && currentPath !== '/register' && currentPath !== '/login') {
               navigate('/login')
          }    
        }
         else {
           // console.log('si llega el authToken en el providerAuth',authTokenCookie)
           setAuthToken(true)
        }
        const currentPath = window.location.pathname;
        if (currentPath === '/' && authToken) {
         navigate('/home');
         }
        }
        getAuthToken()
    }, [])
    
    
    return (
        <AuthTokenContext.Provider value={{authToken }}>
            {children}
        </AuthTokenContext.Provider>
    );
}*/