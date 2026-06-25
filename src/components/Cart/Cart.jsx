import { useCart } from "../../context/CartContext";
import CartView from "./CartView";

const Cart = () => {
  const {
    cart,
    clearCart,
    getCartTotal,
    removeItem
  } = useCart();

  return (
    <CartView
      cart={cart}
      total={getCartTotal()}
      clearCart={clearCart}
      removeItem={removeItem}
    />
  );
};

export default Cart;