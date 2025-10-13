import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductoCard from './ProductoCard';
import productos from '../data/productos';

const ProductosGrid = () => {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [carrito, setCarrito] = useState([]);

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

  const agregarAlCarrito = (productoId, cantidad) => {
    const productoExistente = carrito.find(item => item.id === productoId);
    
    if (productoExistente) {
      setCarrito(carrito.map(item => 
        item.id === productoId 
          ? { ...item, cantidad: item.cantidad + cantidad } 
          : item
      ));
    } else {
      const producto = productos.find(p => p.id === productoId);
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
    
    // Aquí puedes mostrar una notificación o actualizar un contador del carrito
    alert(`Producto añadido al carrito: ${cantidad} unidad(es)`);
  };

  return (
    <div id="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <ProductoCard 
            key={producto.id} 
            producto={producto} 
            onAgregarAlCarrito={agregarAlCarrito}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosGrid;