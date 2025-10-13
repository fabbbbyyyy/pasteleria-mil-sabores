import React from 'react';
import { useParams } from 'react-router-dom';
import ProductosGrid from '../components/ProductosGrid';
import Footer from '../components/Footer';

const ProductosPage = () => {
  const { categoria } = useParams();
  
  // Función para obtener el título según la categoría
  const obtenerTitulo = (cat) => {
    switch(cat) {
      case 'circular': return 'Tortas Circulares';
      case 'cuadrada': return 'Tortas Cuadradas';
      case 'individual': return 'Postres Individuales';
      case 'sinazucar': return 'Productos Sin Azúcar';
      case 'tradicional': return 'Pastelería Tradicional';
      case 'singluten': return 'Productos sin gluten';
      case 'vegano': return 'Productos Veganos';
      case 'especial': return 'Tortas Especiales';
      default: return 'Todos los Productos';
    }
  };

  return (
    <section id="centro">
      <div className="productos-page">
        <h1>{obtenerTitulo(categoria)}</h1>
        <ProductosGrid />
      </div>
    </section>
  );
};

export default ProductosPage;