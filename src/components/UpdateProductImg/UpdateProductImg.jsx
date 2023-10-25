import  ProductsService from '../../services/products.service'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useForm } from 'react-hook-form'  
import { useNavigate } from 'react-router-dom'

const UpdateProductImg = ({productId}) => {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const productsService = new ProductsService()
        const formData = new FormData();
        formData.append("img", data.img[0]); 
        formData.append("productId", productId);
        try {
            const response = await  productsService.updateProductImg(formData);
            const result = response.data;
            if (result.status === 'success') {
                navigate('/misProductos')
               
            } else if (result.status === 'error') {
                console.log(result);                
            }
        } catch (error) {
            console.error(error);
        }
    }

    return ( <>
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <input type="file" required={true} {...register("img")} />
            <input type="submit" value="Reemplazar imagen" className='btns' />
            </form>
        </div>
    </> );
}
 
export default UpdateProductImg;