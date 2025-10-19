import React from "react";
import useLogin from "../hooks/useLogin"; 


const Login = () => {
  const { formData, error, handleChange, handleSubmit } = useLogin();

  return (
    <section id="centro">
    <section id="perfil">
      <h1>Iniciar Sesión</h1>

      <form className="perfil-info" onSubmit={handleSubmit}>
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

        {error && <span className="error">{error}</span>}

        <div className="registro-actions">
          <button className="btn-cta">Ingresar</button>
        </div>
      </form>

      <p>
        ¿No tienes una cuenta?{" "}
        <a href="#" >
          Regístrate
        </a>
      </p>
    </section>
    </section>
  );
};

export default Login;