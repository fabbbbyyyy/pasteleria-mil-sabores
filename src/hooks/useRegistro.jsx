import { useState } from "react";

const useRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: "",
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
    if (!formData.nombre || !formData.correo || !formData.contraseña || !formData.confirmar) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (formData.contraseña !== formData.confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    alert("Cuenta creada con éxito 🎉");
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useRegistro;