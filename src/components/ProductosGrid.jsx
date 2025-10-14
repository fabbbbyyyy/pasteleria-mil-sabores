import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductoCard from './ProductoCard';
import productos from '../data/productos';
import { useCarrito } from '../hooks/Carrito';

const ProductosGrid = () => {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { addToCart } = useCarrito();

  useEffect(() => {
    // Si hay una categoría en la URL, filtramos los productos
    if (categoria) {
      const filtrados = productos.filter(producto => 
        producto.categoria === categoria
      );
      setProductosFiltrados(filtrados);
    } else {
      // Si no hay categoría, mostramos todos los productos
      setProductosFiltrados(productos);
    }
  }, [categoria]);

  return (
    <div id="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <ProductoCard 
            key={producto.id} 
            producto={producto} 
            onAgregarAlCarrito={addToCart}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosGrid;