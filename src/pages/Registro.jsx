import React from "react";
import useRegistro from "../hooks/useRegistro"; 


const Registro = () => {
  const {
    formData,
    error,
    handleChange,
    handleSubmit,
  } = useRegistro();

  return (
    <section id="centro">
    <section id="perfil">
      <h1>Crear una cuenta</h1>

      <form className="perfil-info" onSubmit={handleSubmit}>
        <div>
          <strong>Nombre completo</strong>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
          />
        </div>

        <div>
          <strong>Correo electrónico</strong>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />
        </div>

        <div>
          <strong>Contraseña</strong>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            placeholder="Contraseña"
          />
        </div>

        <div>
          <strong>Confirmar contraseña</strong>
          <input
            type="password"
            name="confirmar"
            value={formData.confirmar}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
          />
        </div>

        {error && <span className="error">{error}</span>}

        <div className="registro-actions">
          <button className="btn-cta">Registrarse</button>
        </div>
      </form>

      <p >
        ¿Ya tienes cuenta?{" "}
        <a href="#" >
          Inicia sesión
        </a>
      </p>
    </section>
    </section>
  );
};

export default Registro;