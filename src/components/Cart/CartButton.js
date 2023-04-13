import { uiSlice } from "../../store/ui";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartVisibility = () => {
    dispatch(uiSlice.actions.toggleCartVisibility());
  };
  const cartAmount = useSelector((store) => store.cart.totalQuantityItems);

  return (
    <button className={classes.button} onClick={toggleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
