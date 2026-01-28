import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart
} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./cartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-box">
          <span className="cart-icon">🛒</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven’t added anything yet.</p>
          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />

          <div className="cart-details">
            <h4>{item.title}</h4>
            <p className="price">₹{item.price}</p>

            <div className="qty-controls">
              <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>

            <p className="item-total">
              Item Total: ₹{item.price * item.quantity}
            </p>
          </div>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      {/* SUMMARY */}
      <div className="cart-summary">
        <h3>Total Amount: ₹{totalAmount}</h3>

        <div className="cart-actions">
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

          <button
            className="clear-cart-btn"
            onClick={() => {
              if (window.confirm("Clear all items from cart?")) {
                dispatch(clearCart());
              }
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
