import React, { useContext, useState } from 'react';
import { UsersContext } from '../../context/UsersContext';
import UsersCards from '../UsersCards/UsersCards';
import NavBar from '../NavBar/NavBar';
import  NavBarsContainer from '../NavBarsContainer/NavBarContainer'

const Users = () => {
  const { users } = useContext(UsersContext)
  const [searchAlias, setSearchAlias] = useState('')
  const [selectedZone, setSelectedZone] = useState('')

  const filteredUsers = users.filter((user) => {
    const uppercaseSearchAlias = searchAlias.toUpperCase()
    if (selectedZone === '' && searchAlias === '') {
      return true;
    }
    const zoneMatch = selectedZone === '' || user.zona === selectedZone
    const aliasMatch = searchAlias === '' ||  user.alias.toUpperCase().includes(uppercaseSearchAlias)
    return zoneMatch && aliasMatch;
  });

  return (
    <>
      <NavBarsContainer />
      <div className='generalContainers'>
      <div className='containerSelects'>
        <p>Buscar usuarios por zona:</p>
        <select onChange={(e) => setSelectedZone(e.target.value)} className='selects'>
          <option value="">Todas las zonas</option>
          <option value="Paseo Rivera Shopping">Paseo Rivera Shopping</option>
          <option value="Shopping Nuevo Centro">Shopping Nuevo Centro</option>
          <option value="Cordoba Shopping">Cordoba Shopping</option>
          <option value="Dinosaurio Mall Ruta20">Dinosaurio Mall Ruta20</option>
          <option value="Patio Olmos">Patio Olmos</option>
        </select>
      </div>
      <div className='containerSelects'>
       <p>Buscar usuario por alias:</p>
      <input
          type="text"
          className='selects'
          placeholder='Alias del usuario que quieres buscar'
          value={searchAlias}
          onChange={(e) => setSearchAlias(e.target.value)}
        />
      </div>
      <div className='cardsContainer'>
        {filteredUsers.map((u) => (
          <UsersCards
          id={u._id}
          first_name={u.first_name}
          last_name={u.last_name}
          alias={u.alias}
          zona={u.zona}
          img={u.imgProfile}
          email={u.email}
        />
        ))}
      </div>
      </div>
    </>
  );
};

export default Users;




