import React, { useState } from 'react';

const ProductoCard = ({ producto, onAgregarAlCarrito }) => {
  const [cantidad, setCantidad] = useState(1);

  const cambiarCantidad = (incremento) => {
    const nuevaCantidad = cantidad + incremento;
    if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
      setCantidad(nuevaCantidad);
    }
  };

  const handleAgregar = () => {
    onAgregarAlCarrito(producto.id, cantidad);
  };

  return (
    <div className="producto-card" data-id={producto.id}>
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="producto-badge">{producto.id}</div>
      </div>
      <div className="producto-info">
        <h3>{producto.nombre}</h3>
        <p className="producto-descripcion">{producto.descripcion}</p>
        <div className="producto-precio">${producto.precio} CLP</div>
        <div className="producto-acciones">
          <div className="cantidad-selector">
            <button className="cantidad-btn" onClick={() => cambiarCantidad(-1)}>-</button>
            <input 
              type="number" 
              id={`cantidad-${producto.id}`} 
              value={cantidad}
              onChange={(e) => setCantidad(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              min="1" 
              max="10" 
            />
            <button className="cantidad-btn" onClick={() => cambiarCantidad(1)}>+</button>
          </div>
          <button className="btn-agregar" onClick={handleAgregar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7z"/>
            </svg>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;