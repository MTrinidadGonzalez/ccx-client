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
    const timer = setTimeout(() => {
      setMostrarPreInicio(false);
      setMostrarContenidoDespues(true);
    }, 3000);
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

