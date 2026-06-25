import {
  createContext,
  useContext,
  useState
} from "react";

export const CartContext = createContext();

// CUSTOM HOOK
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe usarse dentro de un CartProvider"
    );
  }

  return context;
};

// PROVIDER
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {

    // Evita agregar productos con cantidad 0
    if (quantity <= 0) {
      return;
    }

    const productInCart = cart.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity
        }
      ]);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getCartQuantity,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;