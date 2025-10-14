import React from 'react';
import productos from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { useCarrito } from '../hooks/Carrito';

const Recomendaciones = () => {
  // Filtrar productos con precio menor a 30.000
  const productosRecomendados = productos.filter(producto => producto.precio < 30000);
  const { addToCart } = useCarrito();

  return (
    <section id="centro">
      <div id="catal">
        <h1>Recomendaciones</h1>
      </div>
      <div id="productos-grid">
        {productosRecomendados.length === 0 ? (
          <p>No hay productos recomendados disponibles.</p>
        ) : (
          productosRecomendados.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onAgregarAlCarrito={addToCart}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Recomendaciones;