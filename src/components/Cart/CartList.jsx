import CartItem from "./CartItem";

const CartList = ({ cart, removeItem }) => {
  return (
    <>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </>
  );
};

export default CartList;