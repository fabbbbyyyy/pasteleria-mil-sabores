import { useState } from "react";

const useLogin = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.correo || !formData.contraseña) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setError("");

    // Aquí iría la lógica real de login (API, auth, etc.)
    alert("Inicio de sesión exitoso 🎉");
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;