import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section id="centro">
       <div className="home">
        <div id="contenido">
            <h1>Pastelería 1000 Sabores</h1>
            

            <div className="hero-image">
                <p>Celebrando 50 años de tradición y sabor en Chile. Desde 1974, hemos endulzado los momentos más especiales de nuestros clientes con recetas tradicionales y la calidad que nos caracteriza.</p>
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=400&fit=crop&crop=entropy&auto=format" alt="Interior de Pastelería 1000 Sabores"/>
                
            </div>
            
            <div className="cta-buttons">
                <Link to="/catalogo" className="btn-cta">Catalogo</Link>
                <Link to="/recomendaciones" className="btn-cta">Productos recomendados</Link>
            </div>
        </div>

      
        <div id="historia-logros">
            <div className="historia-imagen">
                <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=400&fit=crop&crop=entropy&auto=format" alt="Récord Guinness 1995"/>
            </div>
            <div className="historia-contenido">
                <h2>Récord Guinness 1995</h2>
                <p>Formamos parte de la historia al participar en la creación de la torta más grande del mundo. Este logro refleja nuestro compromiso con la excelencia y la innovación en repostería.</p>
            </div>
        </div>

       
      
        <div id="servicios">
            <h2 className="seccion-titulo">Nuestros Servicios</h2>
            
            <div className="servicios-grid">
                <div className="servicio-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#8B4B3B" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5z"/>
                    </svg>
                    <h3>Delivery</h3>
                    <p>Entregamos tus productos favoritos directamente en tu hogar con la frescura y calidad que nos caracteriza.</p>
                </div>
                
                <div className="servicio-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#8B4B3B" viewBox="0 0 16 16">
                        <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
                        <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4z"/>
                    </svg>
                    <h3>Pedidos Especiales</h3>
                    <p>Creamos tortas personalizadas para tus celebraciones más importantes con diseños únicos y sabores exclusivos.</p>
                </div>
                
                <div className="servicio-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#8B4B3B" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4"/>
                    </svg>
                    <h3>Atención Personalizada</h3>
                    <p>Nuestro equipo especializado te asesora para encontrar el producto perfecto para cada ocasión.</p>
                </div>
            </div>
        </div>

        
        <div id="testimonios">
            <h2 className="seccion-titulo">Lo que dicen nuestros clientes</h2>
            
            <div className="testimonios-grid">
                <div className="testimonio-card">
                    <p>"Las tortas de 1000 Sabores han sido parte de todas nuestras celebraciones familiares por más de 20 años. ¡Simplemente deliciosas!"</p>
                    <strong>- María González</strong>
                </div>
                
                <div className="testimonio-card">
                    <p>"La atención es excepcional y los sabores son únicos. Recomiendo especialmente la torta de manjar."</p>
                    <strong>- Carlos Rodríguez</strong>
                </div>
                
                <div className="testimonio-card">
                    <p>"Una tradición familiar que pasa de generación en generación. Calidad garantizada siempre."</p>
                    <strong>- Ana Morales</strong>
                </div>
            </div>
        </div>

        <div id="cta-final">
            <h2>¿Listo para endulzar tu día?</h2>
            <p>Descubre todos nuestros sabores y haz tu pedido online</p>
            <Link to="/catalogo" className="btn-final">Catalogo</Link>
        </div>
    </div>    
    </section>
    </>
  )
}
