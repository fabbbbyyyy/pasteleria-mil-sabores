import React from 'react'

export default function Comunidad() {
  return (
        <section id="centro">
        <div className="comunidad">
        <div id="contenido">
            <h1>Nuestra Comunidad</h1>
            <p>En Pastelería 1000 Sabores creemos en el poder de la comunidad. Cada compra que realizas no solo satisface tu antojo dulce, sino que también apoya directamente a los talentosos estudiantes de Gastronomía de Duoc UC. Aquí compartimos conocimientos, experiencias y el amor por la repostería que nos une.</p>
            
            <div className="community-stats">
                <div className="stat-item">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Estudiantes Apoyados</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">50</div>
                    <div className="stat-label">Años de Experiencia</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Recetas Creadas</div>
                </div>
            </div>
        </div>


        <div className="community-section">
            <h2>Blog y Noticias de Repostería</h2>
            <div className="blog-grid">
                <article className="blog-card">
                    <img src="https://jordibordas.com/wp-content/uploads/2020/12/jordi-bordas-tecnicas-de-pasteleria-1330x768.jpg" alt="Técnicas de cremas"/>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span className="blog-date">5 Sept 2025</span>
                            <span className="blog-author">Por: María González - Estudiante Duoc UC</span>
                        </div>
                        <h3>Técnicas Avanzadas para Cremas de Repostería</h3>
                        <p>Descubre los secretos detrás de las cremas perfectas. Desde la crema chantilly hasta la ganache, nuestra estudiante María comparte las técnicas que está aprendiendo en sus clases de Duoc UC.</p>
                        <div className="blog-tags">
                            <span className="tag">Técnicas</span>
                            <span className="tag">Estudiantes</span>
                        </div>
                    </div>
                </article>

                <article className="blog-card">
                    <img src="https://cdn-blog.superprof.com/blog_cl/wp-content/uploads/2022/08/torta-arcoiris-tipica.jpg" alt="Decoración de tortas"/>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span className="blog-date">28 Ago 2025</span>
                            <span className="blog-author">Por: Carlos Rodríguez - Profesor Duoc UC</span>
                        </div>
                        <h3>El Arte de la Decoración: Tendencias 2025</h3>
                        <p>Las nuevas tendencias en decoración de tortas que están revolucionando la repostería chilena. Conoce las técnicas que nuestros estudiantes están dominando.</p>
                        <div className="blog-tags">
                            <span className="tag">Decoración</span>
                            <span className="tag">Tendencias</span>
                        </div>
                    </div>
                </article>

                <article className="blog-card">
                    <img src="https://cdn0.matrimonios.cl/article-vendor/6461/original/1280/jpg/b3.jpeg" alt="Repostería tradicional"/>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span className="blog-date">15 Ago 2025</span>
                            <span className="blog-author">Por: Ana Martínez - Egresada Duoc UC</span>
                        </div>
                        <h3>Rescatando la Repostería Tradicional Chilena</h3>
                        <p>Un viaje por los sabores tradicionales de Chile y cómo los estamos reinterpretando con técnicas modernas aprendidas en Duoc UC.</p>
                        <div className="blog-tags">
                            <span className="tag">Tradición</span>
                            <span className="tag">Chile</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div className="community-section">
            <h2>Recetas de Nuestros Estudiantes</h2>
            <div className="recipes-grid">
                <div className="recipe-card">
                    <img src="https://i.ytimg.com/vi/v1sAKFE_8VI/maxresdefault.jpg" alt="Profiteroles"/>
                    <div className="recipe-content">
                        <h4>Profiteroles con Crema Pastelera</h4>
                        <p className="recipe-author">Por: Josefina Muñoz - 3er año Duoc UC</p>
                        <div className="recipe-difficulty">
                            <span className="difficulty-level">Nivel: Intermedio</span>
                            <span className="recipe-time">⏱️ 2 horas</span>
                        </div>
                        <p>Una receta clásica con el toque especial que aprendí en mis prácticas. Perfect...</p>
                        <button className="recipe-btn">Ver Receta Completa</button>
                    </div>
                </div>

                <div className="recipe-card">
                    <img src="https://cocinachilena.cl/wp-content/uploads/2011/02/Macarons-lucuma.jpg" alt="Macarons"/>
                    <div className="recipe-content">
                        <h4>Macarons de Lúcuma</h4>
                        <p className="recipe-author">Por: Diego Vargas - Egresado Duoc UC</p>
                        <div className="recipe-difficulty">
                            <span className="difficulty-level">Nivel: Avanzado</span>
                            <span className="recipe-time">⏱️ 4 horas</span>
                        </div>
                        <p>Fusionando la técnica francesa con sabores chilenos. Una creación que nació...</p>
                        <button className="recipe-btn">Ver Receta Completa</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="community-section support-section">
            <div className="support-content">
                <h2>Cómo Tu Compra Apoya a Nuestra Comunidad</h2>
                <div className="support-grid">
                    <div className="support-item">
                        <div className="support-icon">🎓</div>
                        <h3>Becas de Estudio</h3>
                        <p>El 10% de nuestras ganancias se destina a becas para estudiantes destacados de Gastronomía en Duoc UC.</p>
                    </div>
                    <div className="support-item">
                        <div className="support-icon">👨‍🍳</div>
                        <h3>Prácticas Profesionales</h3>
                        <p>Ofrecemos espacios de práctica real donde los estudiantes pueden aplicar sus conocimientos.</p>
                    </div>
                    <div className="support-item">
                        <div className="support-icon">🏆</div>
                        <h3>Concursos y Premios</h3>
                        <p>Organizamos competencias anuales con premios que impulsan la creatividad estudiantil.</p>
                    </div>
                    <div className="support-item">
                        <div className="support-icon">📚</div>
                        <h3>Biblioteca de Recursos</h3>
                        <p>Financiamos libros especializados y herramientas para el aprendizaje de todos los estudiantes.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="community-section">
            <h2>Estudiante Destacado del Mes</h2>
            <div className="featured-student">
                <div className="student-photo-container">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Estudiante destacado" className="student-photo"/>
                </div>
                <div className="student-info-detailed">
                    <h3>Sebastián Torres</h3>
                    <p className="student-course">Técnico en Gastronomía - 2do Año Duoc UC</p>
                    <p className="student-achievement">🏆 Ganador del Concurso Nacional de Repostería Estudiantil 2025</p>
                    <p className="student-quote">"Trabajar con Pastelería 1000 Sabores me ha enseñado que la pasión y la técnica van de la mano. Cada día aprendo algo nuevo que aplico en mis estudios."</p>
                    <div className="student-specialties">
                        <span className="specialty">Chocolatería</span>
                        <span className="specialty">Panadería Artesanal</span>
                        <span className="specialty">Decoración</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="community-section">
            <h2>Lo Que Dice Nuestra Comunidad</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p>"Gracias a la beca que recibí por parte de Pastelería 1000 Sabores, pude completar mis estudios. Ahora trabajo como chef pastelera en un hotel 5 estrellas."</p>
                    <div className="testimonial-author">
                        <strong>- Patricia Henríquez</strong>
                        <span>Egresada Duoc UC 2023</span>
                    </div>
                </div>
                <div className="testimonial-card">
                    <p>"Las prácticas en la pastelería me dieron la experiencia real que necesitaba. Aprendí tanto la parte técnica como el servicio al cliente."</p>
                    <div className="testimonial-author">
                        <strong>- Roberto Silva</strong>
                        <span>Estudiante 3er Año Duoc UC</span>
                    </div>
                </div>
                <div className="testimonial-card">
                    <p>"No solo compro deliciosos pasteles, también sé que estoy contribuyendo al futuro de jóvenes talentos. Es una doble satisfacción."</p>
                    <div className="testimonial-author">
                        <strong>- Carmen Rodríguez</strong>
                        <span>Cliente fiel desde 2018</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
