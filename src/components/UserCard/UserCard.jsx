import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateProfileImg from '../UpdateProfileImg/UpdateProfileImg';
import  DeleteUser from '../DeleteUser/DeleteUser'

const UserCard = ({id, first_name, last_name, alias, email, zona, role, img }) => {
  const [showUpdateProfileImg, setShowUpdateProfileImg] = useState(false);

  const toggleUpdateProfileImg = () => {
    setShowUpdateProfileImg(!showUpdateProfileImg);
  };

  return (
    <>
      <div className="cards" key={id}>
        <img src={img} alt="Imagen perfil de usuario" className="cardsImg" loading='lazy' />
        <button onClick={toggleUpdateProfileImg} className='btns'>
          Cambiar imagen de perfil
        </button>
        {showUpdateProfileImg && <UpdateProfileImg />}
        <h1>Nombre:{first_name} {last_name}</h1>
        <h2>Alias: {alias} </h2>
        <p>Correo: {email} </p>
        <p>Zona: {zona}</p>
        <p>Rol: {role} </p>
        <div  className='btnConIcon'>
        <Link to='/updateuser' className='btns'>Modificar datos</Link>
        <ion-icon name="create-outline"></ion-icon>
        </div>
        
        <div  className='btnConIcon'>
        <DeleteUser/>
        <ion-icon name="trash-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}

export default UserCard;


