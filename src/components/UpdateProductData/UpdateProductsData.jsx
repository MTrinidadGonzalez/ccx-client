import {useForm,Controller} from 'react-hook-form'
import ProductsService from '../../services/products.service'
import Swal from 'sweetalert2';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import NavBarsContainer from '../NavBarsContainer/NavBarContainer'

const UpdateProductData = () => {
  const { products } = useContext(ProductsContext);
  const [product,setProduct]=useState({})
  const {register,handleSubmit,control,setValue}= useForm() 
  const { pid } = useParams()
  const navigate = useNavigate()
      
    useEffect(() => {
      const productFound = products.find((p) => p._id === pid);
      setProduct(productFound);
    }, []);

    const onSubmit=async(data)=>{
    try{
    const productToSend={
        title: data.title,
        description:data.description,
        price:data.price,
        category:data.category,
        talle:data.talle,
        color:data.color,
        productId: pid
    }
     
      const productService= new ProductsService()
      const response= await productService.updateProduct(productToSend)
      const result= await response.data
      
      if(result.status === 'success'){
        Swal.fire({
          title: 'Producto modificado!',
          icon: 'success',
          showCancelButton: false,
          background: 'white',
          color: ' rgb(16,26,27)',
          timer: 2000
        });
       
         navigate(`/productDetail/${pid}`)

      }
    }
    catch(error){
      console.log(error)
    }
  }
  

    return ( <>
    <NavBarsContainer/>
  <div className='generalContainers'>
  <div className='divContainerForms'>
  <form  onSubmit={handleSubmit(onSubmit)} className='forms' encType="multipart/form-data">
      <img src={product.img} alt={product.description} className='cardsImg'/>
        <input type="text" placeholder={product.title}  {...register("title")}/>
        <input type="text" placeholder={product.description}  {...register("description")}/>
        <input type="number" placeholder={`Precio: $ ${product.price}`} min="0" max="30000"  {...register("price")}/>
        
      <div>
        <p>Selecciona nuevamente la categoría:</p>
        <select {...register('category')} required={true}>
          <option value='pantalones'>pantalones</option>
          <option value='remeras'>remeras</option>
          <option value='abrigos'>abrigos</option>
          <option value='accesorios'>accesorios</option>
        </select>
      </div>

        <div>
        <p>Selecciona nuevamente el talle:</p>
          <select {...register('talle')} required={true}>
            <option value='xs'>XS</option>
            <option value='s'>S</option>
            <option value='m'>M</option>
            <option value='l'>L</option>
            <option value='xl'>XL</option>
            <option value='neutro'>Neutro</option>
          </select>
      <p>Selecciona nuevamente el color:</p>
          <select {...register('color')} required={true}>
            <option value='blanco'>Blanco</option>
            <option value='negro'>Negro</option>
            <option value='azul'>Azul</option>
            <option value='verde'>Verde</option>
            <option value='rojo'>Rojo</option>
            <option value='amarillo'>Amarillo</option>
            <option value='rosa'>Rosa</option>
            <option value='naranja'>Naranja</option>
            <option value='violeta'>Violeta</option>
            <option value='dorado'>Dorado</option>
            <option value='plateado'>Plateado</option>
            <option value='estampado'>Estampado</option>
            <option value='marron'>Marrón</option>
            <option value='celeste'>Celeste</option>
            <option value='gris'>Celeste</option>
            <option value='crema'>Crema</option>
            <option value='jean'>Jean</option>
          </select>
      </div>
      <input type="submit" value='Modificar'  className='btns'/>
    </form>
  </div>
  </div>
    
    </> );
}
 
export default UpdateProductData;