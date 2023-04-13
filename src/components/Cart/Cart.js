import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "items");
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            item={{
              id: product.id,
              title: product.title,
              quantity: product.qty,
              total: product.totalPrice,
              price: product.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
