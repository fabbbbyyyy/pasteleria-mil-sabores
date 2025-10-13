import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Catalogo() {
  return (
    <section id="centro">
      <div id="catal"><h1>Catálogo</h1></div>
      
      <div id="catalogo">
        <div className="card">
          <img src="https://cocinerosargentinos.com/content/recipes/original/recipes.20871.jpg" alt="Tortas Cuadradas"/>
          <Link to="/productos/cuadrada">Tortas Cuadradas</Link>
        </div>
        
        <div className="card" id="circular">
          <img src="https://cdn0.recetasgratis.net/es/posts/8/0/2/torta_milhojas_24208_orig.jpg" alt="Tortas Circulares"/>
          <Link to="/productos/circular">Tortas Circulares</Link>
        </div>
        
        <div className="card">
          <img src="https://cocinemosjuntos.com.co/media/catalog/product/cache/5773068ed9b4f222a4301212c252d702/f/l/flan-de-caramelo-con-frutos-rojos_1__1.jpg" alt="Postres Individuales" />
          <Link to="/productos/individual">Postres Individuales</Link>
        </div>
        
        <div className="card">
          <img src="https://www.gourmet.cl/wp-content/uploads/2022/12/torta-de-panqueque-naranja.jpg" alt="Productos Sin Azúcar"/>
          <Link to="/productos/sinazucar">Productos Sin Azúcar</Link>
        </div>
        
        <div className="card">
          <img src="https://www.tipicochileno.cl/wp-content/uploads/2025/06/News_Gato_NuevoDiseno-junio_c-SOPAIPILLAS.png" alt="Pastelería Tradicional"/>
          <Link to="/productos/tradicional">Pastelería Tradicional</Link>
        </div>
        
        <div className="card">
          <img src="https://chyfoodservice.cl/wp-content/uploads/2020/03/muffins-arandanos-singluten.jpg" alt="Productos sin gluten"/>
          <Link to="/productos/singluten">Productos sin gluten</Link>
        </div>
        
        <div className="card">
          <img src="https://i.pinimg.com/736x/c0/7e/4e/c07e4e39847785119f1f0f91ac116c63.jpg" alt="Productos Vegana"/>
          <Link to="/productos/vegano">Productos Vegana</Link>
        </div>
        
        <div className="card">
          <img src="https://www.sorprendelima.pe/cdn/shop/files/IMG_4787.jpg?v=1709231148" alt="Tortas Especiales"/>
          <Link to="/productos/especial">Tortas Especiales</Link>
        </div>
      </div>
    </section>
  );
}