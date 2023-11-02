import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import NavBarsContainer from '../NavBarsContainer/NavBarContainer';

const UserProducts = () => {
    const [userProducts, setUserProducts] = useState([]);
    const { products } = useContext(ProductsContext);
    const { owner } = useParams();

    useEffect(() => {
        const filteredProducts = products.filter((p) => p.owner.toLowerCase() === owner.toLowerCase());
        setUserProducts(filteredProducts);
    }, [owner, products]);

    return (
        <>
            <NavBarsContainer />
            <div className='generalContainers'>
                <div className='cardsContainer'>
                    {userProducts.length > 0 ? (
                        userProducts.map((p) => (
                            <ProductCard
                                key={p._id}
                                title={p.title}
                                category={p.category}
                                description={p.description}
                                price={p.price}
                                stock={p.stock}
                                color={p.color}
                                talle={p.talle}
                                img={p.img}
                                id={p._id}
                            />
                        ))
                    ) : (
                        <div >
                            <h2>No hay productos de este usuario por el momento</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default UserProducts;


