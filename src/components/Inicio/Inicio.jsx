import React, { useState, useEffect } from 'react';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Presentacion from '../Presentación/Presentacion';
import Login from '../Login/Login';
import PreInicio from '../PreInicio/PreInicio';

const Inicio = () => {
  const [mostrarPreInicio, setMostrarPreInicio] = useState(true);
  const [mostrarContenidoDespues, setMostrarContenidoDespues] = useState(false);

  useEffect(() => {
    // Configurar un temporizador para cambiar el estado después de 6 segundos
    const timer = setTimeout(() => {
      setMostrarPreInicio(false);
      setMostrarContenidoDespues(true);
    }, 3000);

    // Limpieza del temporizador en caso de que el componente se desmonte antes
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {mostrarPreInicio && <PreInicio />}
      
      {mostrarContenidoDespues && (
        <>
         <div className='navInicio'>
        <Logo />
        </div>
          <div className='bodyInicio'>
          <Presentacion />
          <Login />
        </div>
        </>
      
      )}
    </>
  );
};

export default Inicio




/*import Register from '../Register/Register'
import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo'
import Presentacion from '../Presentación/Presentacion'
import Login from '../Login/Login'
import PreInicio from '../PreInicio/PreInicio'

const Inicio = () => {
    
    return ( <>
    
    <div className='navInicio'>
        <Logo/>
    </div>
   
    <div className='bodyInicio'>
    <Presentacion/>    
    <Login/>
    </div>

    
        <PreInicio/>
    
    </> );
}
 
export default Inicio;*/
//<Link to='/login' className='btns-links'>YA ESTOY REGISTRADA!</Link>