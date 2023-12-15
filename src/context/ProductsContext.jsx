import ProductsService from '../services/products.service'
import { createContext } from 'react'
import { useState,useEffect } from 'react'


export const ProductsContext=createContext({})
export const ProductsProvider= ({children,socket}) => {

    const [products,setProducts]= useState([])

   useEffect(()=>{
        const getProducts= async()=>{
        const productsService= new ProductsService()
        const response= await productsService.getProducts()
        const result= response.data.payload
        
        if(response.data.status === 'success'){
            socket.on('getRealTimeProducts',(data)=>{
                // console.log('soketio de products:', data)
                if(data){
                 setProducts(data)
                }
             })
          
        }
        else{
            console.log('no authToken productsContext')
        }
  
    }
        getProducts()  
        
       

    },[])

    
    return ( <>
   <ProductsContext.Provider value={{products}}>
    {children}
   </ProductsContext.Provider>
    </> );
}