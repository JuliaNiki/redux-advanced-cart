import { cartSlice } from "../../store/cart";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(cartSlice.actions.addItemToCart({ id, price, title }));
  };

  const onRemoveItem = () => {
    dispatch(cartSlice.actions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItem}>-</button>
          <button onClick={onAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
