import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
} from "../pages/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.unitPrice}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => dispatch(incrementItem(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementItem(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
