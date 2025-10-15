import React from 'react';
import { render, screen, act, renderHook } from '@testing-library/react';
import { CarritoProvider, useCarrito } from './Carrito';

// Mock para localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Componente de prueba que usa el hook de carrito
const TestComponent = () => {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    incrementQuantity, 
    decrementQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isInCart,
    getProductQuantity 
  } = useCarrito();

  return (
    <div>
      <div data-testid="cart-size">{cart.length}</div>
      <div data-testid="total-items">{getTotalItems()}</div>
      <div data-testid="total-price">{getTotalPrice()}</div>
      <button 
        data-testid="add-product" 
        onClick={() => addToCart({ id: '1', nombre: 'Producto 1', precio: '1000' }, 1)}
      >
        Añadir producto
      </button>
      <button 
        data-testid="remove-product" 
        onClick={() => removeFromCart('1')}
      >
        Eliminar producto
      </button>
      <button 
        data-testid="update-quantity" 
        onClick={() => updateQuantity('1', 5)}
      >
        Actualizar cantidad
      </button>
      <button 
        data-testid="increment-quantity" 
        onClick={() => incrementQuantity('1')}
      >
        Incrementar
      </button>
      <button 
        data-testid="decrement-quantity" 
        onClick={() => decrementQuantity('1')}
      >
        Decrementar
      </button>
      <button 
        data-testid="clear-cart" 
        onClick={clearCart}
      >
        Limpiar carrito
      </button>
      <div data-testid="is-in-cart">{isInCart('1') ? 'true' : 'false'}</div>
      <div data-testid="product-quantity">{getProductQuantity('1')}</div>
    </div>
  );
};

describe('Carrito hook', () => {
  beforeEach(() => {
    // Limpiar localStorage y restaurar mocks entre pruebas
    jest.clearAllMocks();
    window.localStorage.clear();
  });

  const mockProductos = [
    { id: '1', nombre: 'Torta de Chocolate', precio: '15000', quantity: 2 },
    { id: '2', nombre: 'Cheesecake', precio: '18000', quantity: 1 }
  ];

  test('carga productos del localStorage al inicializar', () => {
    // Configurar localStorage con datos de prueba
    window.localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockProductos));
    
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    expect(screen.getByTestId('cart-size').textContent).toBe('2');
    expect(window.localStorage.getItem).toHaveBeenCalledWith('shoppingCart');
  });

  test('guarda productos en localStorage cuando el carrito cambia', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    // Añadir un producto al carrito
    act(() => {
      screen.getByTestId('add-product').click();
    });
    
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(window.localStorage.setItem.mock.calls[0][0]).toBe('shoppingCart');
  });

  test('añade productos al carrito', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
    });
    
    expect(screen.getByTestId('cart-size').textContent).toBe('1');
    expect(screen.getByTestId('total-items').textContent).toBe('1');
    expect(screen.getByTestId('total-price').textContent).toBe('1000');
  });

  test('elimina productos del carrito', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    // Añadir y luego eliminar un producto
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('remove-product').click();
    });
    
    expect(screen.getByTestId('cart-size').textContent).toBe('0');
  });

  test('actualiza la cantidad de un producto', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('update-quantity').click();
    });
    
    expect(screen.getByTestId('total-items').textContent).toBe('5');
  });

  test('incrementa la cantidad de un producto', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('increment-quantity').click();
    });
    
    expect(screen.getByTestId('total-items').textContent).toBe('2');
  });

  test('decrementa la cantidad de un producto', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('update-quantity').click(); // Establece cantidad a 5
      screen.getByTestId('decrement-quantity').click(); // Reduce a 4
    });
    
    expect(screen.getByTestId('total-items').textContent).toBe('4');
  });

  test('elimina un producto cuando su cantidad llega a 0', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click(); // Añade con cantidad 1
      screen.getByTestId('decrement-quantity').click(); // Debería eliminar el producto
    });
    
    expect(screen.getByTestId('cart-size').textContent).toBe('0');
  });

  test('limpia todo el carrito', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('clear-cart').click();
    });
    
    expect(screen.getByTestId('cart-size').textContent).toBe('0');
  });

  test('verifica si un producto está en el carrito', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    // Inicialmente no está en el carrito
    expect(screen.getByTestId('is-in-cart').textContent).toBe('false');
    
    // Añadir producto
    act(() => {
      screen.getByTestId('add-product').click();
    });
    
    expect(screen.getByTestId('is-in-cart').textContent).toBe('true');
  });

  test('obtiene la cantidad de un producto específico', () => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    act(() => {
      screen.getByTestId('add-product').click();
      screen.getByTestId('update-quantity').click(); // Establece cantidad a 5
    });
    
    expect(screen.getByTestId('product-quantity').textContent).toBe('5');
  });

  test('maneja errores al cargar el carrito desde localStorage', () => {
    // Simular JSON inválido en localStorage
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    window.localStorage.getItem.mockReturnValueOnce('invalid-json');
    
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('shoppingCart');
    
    consoleSpy.mockRestore();
  });
});
