import {Link} from 'react-router-dom'

const UsersCards = ({id,first_name,last_name,alias,zona, img, email}) => {
    return ( <>
     <div className="slider-card" key={id}>
        <div className='slider-card-container-img'>
        <img src={img} alt="Imagen perfil de usuario " className="cardsImg" loading='lazy' />
        </div>
        <div className='bodyCards'>
        <h1>{first_name} {last_name}</h1>
        <h2>Alias: {alias} </h2>
        <p>Zona: {zona}</p>
      
        </div>
        <Link to={`/userProducts/${email}`} className='btns'>Ver productos de este usuario</Link>
    </div>
    </> );
}
 
export default UsersCards;