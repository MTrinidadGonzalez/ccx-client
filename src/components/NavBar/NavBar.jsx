import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo'
import CarrarSesion from '../CerrarSesion/CerrarSesion'
import React, { useContext } from 'react';


const NavBar = () => {
     

    return ( <>
    <nav className='navGeneral'>
    <Link to="/home" className='itemsNavGral'>
    <Logo/>
    </Link>
    <Link to='/products' className='itemsNavGral'>Productos</Link>
    <Link to='/users' className='itemsNavGral'>Usuarios</Link>
    

    <Link to='/profile' className='itemsNavGral'>Mi perfil</Link>
    <Link to='/misProductos'  className='itemsNavGral' >Mis productos</Link>
    <Link to='/newProduct' className='itemsNavGral' >Publicar producto</Link>
    <CarrarSesion/>
   
 
    </nav>
   
    </> );
}
 
export default NavBar;
/*    <Link to='/userChat' className='itemsNavGral'>Chats</Link>*/