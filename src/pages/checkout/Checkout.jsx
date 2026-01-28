import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlice";
import { useState, useEffect } from "react";
import "./checkout.css";

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const totalAmount = cartItems.reduce( (sum, item) => sum + item.price * item.quantity,0);

  // Redirect if cart empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: cartItems,
      total: totalAmount,
      paymentMethod,
      status: "PLACED",
      date: new Date().toLocaleString()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        <h3>Total Amount</h3>
        <p className="checkout-total">₹{totalAmount}</p>
      </div>

      <div className="payment-section">
        <h4>Select Payment Method</h4>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "COD"}
            onChange={() => setPaymentMethod("COD")}
          />
          Cash on Delivery
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "CARD"}
            onChange={() => setPaymentMethod("CARD")}
          />
          Debit / Credit Card
        </label>
      </div>

      <button
        className="place-order-btn"
        onClick={placeOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
