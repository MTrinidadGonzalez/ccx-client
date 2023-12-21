import { useEffect,useState } from "react";
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react'
import {UserContext} from '../../context/UserContext'
import  NavBarsContainer from '../NavBarsContainer/NavBarContainer'
import {Link} from 'react-router-dom'
import ProductsService from '../../services/products.service'
import UpdateProductImg from '../UpdateProductImg/UpdateProductImg'
import Swal from 'sweetalert2';

const MisProductos = () => {
    
const [userProducts, setUserProducts]= useState([])
const { products } = useContext(ProductsContext);
const { user } = useContext(UserContext)


useEffect(() => {
  console.log('en mis productos user:', user)
  if(user){
    const owner = user.email;
    console.log('en mis productos owner:',owner);
    const filteredProducts = products.filter((p) => p.owner.toLowerCase() === owner.toLowerCase());
    setUserProducts(filteredProducts);
  }
  }, [user, products]);

  const handleDeleteProduct = async (pid) => {
    const productsServices = new ProductsService();
  
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonBackground:' rgb(16,26,27)',
      cancelButtonText: 'Cancelar',
      cancelButtonBackground: 'rgb(201,0,0)',
      customClass: {
        confirmButton: 'confirmSAlertBtn',
        cancelButton: 'cancelSAlertBtn',
      },
      background: 'white',
      color: ' rgb(16,26,27)',
    });

    if (result.isConfirmed) {
      try {
        const result = await productsServices.deleteProduct(pid);
        const response = result.data;
  
        if (response.status === 'success') {
          Swal.fire('Producto eliminado', 'El producto ha sido eliminado con éxito.', 'success');
        }
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        Swal.fire('Error', 'Hubo un error al eliminar el producto.', 'error');
      }
    }
  };



  return ( <>
    <NavBarsContainer/>
    <div className='generalContainers'>
    <div className='cardsContainer'>
    {userProducts ? (
      userProducts.map((p) => (
        <div className="cards"  key={p._id}>
            <img src={p.img} alt={p.description} className="cardsImg" loading='lazy' />
            <UpdateProductImg productId={p._id}/>
            <p>Título: {p.title}</p>
            <p>Descripción: {p.description} </p>
            <p>Categoría:{p.category} </p>
            <p>Precio:$ {p.price} </p>
            <p>Talle:{p.talle} </p>
            <p>Color:{p.color} </p>
            <div className='btnConIcon'>
            <Link className="btns"  to={`/updateproduct/${p._id}`}>Modificar producto</Link>
            <ion-icon name="create-outline"></ion-icon>
            </div>
            <div className='btnConIcon'>
            <button className="btns" onClick={() => handleDeleteProduct(p._id)}>Eliminar producto</button>
            <ion-icon name="trash-outline"></ion-icon>
            </div>
            
         
        </div>
      ))
    ) : (
      <h2>No hay productos de este usuario por el momento</h2>
    )}
    </div>
    </div>
    
    </> );
 
}
 
export default MisProductos;

