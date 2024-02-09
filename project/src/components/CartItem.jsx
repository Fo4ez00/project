import { useDispatch, useSelector } from "react-redux";
import {
  removeItemAsyncAction,
  incrementItem,
  decrementItem,
} from "../slice/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cart.status);

  const handleRemoveItem = async (itemId) => {
    try {
      await dispatch(removeItemAsyncAction(itemId));
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <li key={item.id}>
      <div>
        <img src={item.imageUrl} alt={item.name} />
        <div>
          <p>{item.name}</p>
          <p>Price: ${item.unitPrice}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div>
          <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
          <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
          <button
            onClick={() => handleRemoveItem(item.id)}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Removing..." : "Remove"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
