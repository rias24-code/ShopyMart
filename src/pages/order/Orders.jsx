import { useNavigate } from "react-router-dom";
import "./orders.css";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-orders">
      <div className="empty-orders-box">
        <span className="order-icon">📦</span>
        <h2>No orders yet</h2>
        <p>You haven’t placed any orders yet.</p>
        <button onClick={() => navigate("/")}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Orders;
