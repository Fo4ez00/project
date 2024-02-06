import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slice/CartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={`${item.id}-${index}`} item={item} />
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;