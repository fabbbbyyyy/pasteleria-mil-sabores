import { useState } from "react";

export const usePerfil = () => {
  const [perfil, setPerfil] = useState({
    nombre: "Juan Pérez",
    correo: "juanperez@example.com",
    telefono: "+56 9 1234 5678",
    direccion: "Av. Siempre Viva 123, Santiago",
    metodoPago: "Tarjeta de crédito",
  });

  const [editando, setEditando] = useState(false);
  const [errores, setErrores] = useState({});

  const metodosDePago = [
    "Tarjeta de crédito",
    "Tarjeta de débito",
    "Transferencia bancaria",
    "PayPal",
    "Efectivo",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!perfil.correo.includes("@") || !perfil.correo.includes(".")) {
      nuevosErrores.correo = 'El correo electrónico debe tener un "@" y un "."';
    }

    if (perfil.nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre no puede estar vacío.";
    }

    if (perfil.telefono.trim() === "") {
      nuevosErrores.telefono = "El teléfono no puede estar vacío.";
    }

    if (perfil.direccion.trim() === "") {
      nuevosErrores.direccion = "La dirección no puede estar vacía.";
    }

    if (!metodosDePago.includes(perfil.metodoPago)) {
      nuevosErrores.metodoPago = "Selecciona un método de pago válido.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleGuardar = () => {
    if (validar()) {
      setEditando(false);
      alert("✅ Perfil guardado correctamente");
    }
  };

  return {
    perfil,
    editando,
    errores,
    metodosDePago,
    handleChange,
    handleGuardar,
    setEditando,
  };
};
