import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import NavBarsContainer from '../NavBarsContainer/NavBarContainer';
import { UsersContext } from '../../context/UsersContext';

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { users } = useContext(UsersContext);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedZone, setSelectedZone] = useState('');

  const applyFilters = (product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }

    if (selectedSize && product.talle !== selectedSize) {
      return false;
    }

    if (selectedColor && product.color !== selectedColor) {
      return false;
    }

    return true;
  };

  const filterByZone = (product) => {
    if (selectedZone) {
      const owner = users.find((user) => user.email === product.owner);
      return owner && owner.zona === selectedZone;
    }
    return true;
  };

  const filteredProducts = products.filter((product) => {
    const isFiltered = applyFilters(product);
    if (isFiltered) {
      return filterByZone(product);
    }
    return false;
  });

  return (
    <>
      <NavBarsContainer />
      <div className='constainersGenerale'>
        <div className='containerSelects'>
          <select onChange={(e) => setSelectedCategory(e.target.value)} className='selects'>
            <option value="">Todas las categorías</option>
            <option value="articulos de belleza">Artículos de belleza</option>
            <option value="articulos para el hogar">Artículos para el hogar</option>
            <option value="remeras">Remeras</option>
            <option value="pantalones">Pantalones</option>
            <option value="abrigos">Abrigos</option>
            <option value="accesorios">Accesorios</option>
          </select>

          {selectedCategory !== 'articulos para el hogar' && selectedCategory !== 'articulos de belleza' ? (
            <select onChange={(e) => setSelectedSize(e.target.value)} className='selects'>
              <option value="">Todas las tallas</option>
              <option value="neutro">Neutro</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          ) : null}

          <select onChange={(e) => setSelectedColor(e.target.value)} className='selects'>
            <option value="">Todos los colores</option>
            <option value="ninguno">Ninguno</option>
            <option value="blanco">Blanco</option>
            <option value="negro">Negro</option>
            <option value="marron">Marrón</option>
            <option value="blanco">Blanco</option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="amarillo">Amarillo</option>
            <option value="verde">Verde</option>
            <option value="rosa">Rosa</option>
            <option value="celeste">Celeste</option>
            <option value="violeta">Violeta</option>
            <option value="naranja">Naranja</option>
            <option value="gris">Gris</option>
            <option value="crema">Crema</option>
            <option value="jean">Jean</option>
            <option value="estampado">Estampado</option>
          </select>

          <select onChange={(e) => setSelectedZone(e.target.value)} className='selects'>
            <option value="">Todas las zonas</option>
            <option value="Paseo Rivera Shopping">Paseo Rivera Shopping</option>
            <option value="Shopping Nuevo Centro">Shopping Nuevo Centro</option>
            <option value="Cordoba Shopping">Cordoba Shopping</option>
            <option value="Dinosaurio Mall Ruta20">Dinosaurio Mall Ruta20</option>
            <option value="Patio Olmos">Patio Olmos</option>
          </select>
        </div>
        <div className='cardsContainer'>
          {selectedCategory === '' ? (
            products.map((p) => (
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
                status={p.status}
                owner={p.owner}
              />
            ))
          ) : (
            filteredProducts.map((p) => (
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
                status={p.status}
                owner={p.owner}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
