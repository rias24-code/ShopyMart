import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cart = useSelector(state => state.cart);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Link to="/cart" className="cart-icon">
      🛒 <span>{count}</span>
    </Link>
  );
};

export default CartIcon;
