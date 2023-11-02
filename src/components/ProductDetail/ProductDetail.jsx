import { useState,useEffect } from "react";
import ProductsService from '../../services/products.service'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'
import NavBarsContainer from '../NavBarsContainer/NavBarContainer'

const ProductDetail = () => {
    const [product,setProduct]=useState({})
    const { pid } = useParams()
   
   
    useEffect(()=>{
     
        const getProduct=async()=>{
            const prodcutsService= new ProductsService()
            const result= await prodcutsService. getProduct(pid)
            const response= result.data
          if(response.status === 'success'){
            const productDb= response.payload
            setProduct(productDb)
          }
        }
        getProduct()
    },[])

    return ( <>
    <NavBarsContainer/>
    <div className="generalContainers">
        <ProductCard id={product._id} 
        category={product.category}
        img={product.img} 
        description={product.description} 
        price={product.price} 
        color={product.color}
        talle={product.talle}
        status={product.status}
        />
        
    </div>
    
    </> );
}
 
export default ProductDetail;