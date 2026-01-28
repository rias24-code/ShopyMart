import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.items);

  const count = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Link to="/cart" className="cart-icon">
      🛒 <span>{count}</span>
    </Link>
  );
};

export default CartIcon;
