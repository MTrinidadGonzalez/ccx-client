import {useForm} from 'react-hook-form'
import ProductsService from '../../services/products.service'
import NavBarsContainer from '../NavBarsContainer/NavBarContainer'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const CreateProductForm = () => {
  const {register,handleSubmit,setValue, reset}= useForm() 
  const navigate = useNavigate()
  const onSubmit=async(data)=>{
  try{
  
    const formData = new FormData();
    formData.append("img", data.img[0])
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("talle", data.talle);
    formData.append("color", data.color)
   
    const productService= new ProductsService()
    const response= await productService.createProduct(formData)
    const result= await response.data
    
    if(result.status === 'success'){
      const pid= result.payload._id
      Swal.fire({
        icon: 'success', 
        title: 'Producto agregado',
        showConfirmButton: false, 
        timer: 2000, 
        background: 'white',
        color: 'rgb(187,121,135)'
         
      });
      reset()
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
     <h2>Publicar producto</h2>
      <div className='containerSelectsForms' >
      <input type="text" placeholder="Título"  required={true} {...register("title")}/>
        <input type="text" placeholder="Descripcón" required={true} {...register("description")}/>
        <input type="number" placeholder="Precio: $" min="0" max="30000" required={true} {...register("price")}/>
      </div>
        
      <div className='containerSelectsForms'>
        <p>Categoría:</p>
        <select {...register('category')} className='selects'>
        <option value='articulos de belleza' >Artículos de belleza</option>
          <option value='articulos para el hogar'>Artículos del hogar</option>
          <option value='gimnasia'>Gimnasia</option>
          <option value='tecnologia'>Tecnología</option>
          <option value='pantalones'>Pantalones</option>
          <option value='remeras'>Remeras</option>
          <option value='abrigos'>Abrigos</option>
          <option value='accesorios'>Accesorios</option>
          
        </select>
      </div>

        <div className='containerSelectsForms'>
        <p>Talle:</p>
          <select {...register('talle')} className='selects'>
          <option value='neutro'>Neutro</option>
            <option value='xs'>XS</option>
            <option value='s'>S</option>
            <option value='m'>M</option>
            <option value='l'>L</option>
            <option value='xl'>XL</option>
           
          </select>
      </div>
    
      <div className='borderContainer'>
        <p>Cargar imagen del producto:</p>
        <input type="file" placeholder="Carga la imagen del producto" {...register("img")} />
      </div>
    
      <div className='containerSelectsForms'>
      <p>Color:</p>
          <select {...register('color')} className='selects'>
          <option value='ninguno'>Ninguno</option>
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
      <input type="submit" value='Crear' className='btns'/>
    </form>
  </div>
  </div>
    
    </> );
}
 
export default CreateProductForm;

