import {Link} from 'react-router-dom'

const UsersCards = ({id,first_name,last_name,alias,zona, img, email}) => {
    return ( <>
     <div className="cards" key={id}>
        <img src={img} alt="Imagen perfil de usuario " className="cardsImg" loading='lazy' />
        <h1>{first_name} {last_name}</h1>
        <h2>Alias: {alias} </h2>
        <p>Zona: {zona}</p>
        <Link to={`/userProducts/${email}`} className='btns'>Ver productos de este usuario</Link>
    </div>
    </> );
}
 
export default UsersCards;