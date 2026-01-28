import { useNavigate } from "react-router-dom";
import "./orders.css";
import { useEffect, useState } from "react";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // Load orders
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Auto status update
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prevOrders => {
        const updatedOrders = prevOrders.map(order => {
          if (order.status === "PLACED") {
            return { ...order, status: "SHIPPED" };
          }
          if (order.status === "SHIPPED") {
            return { ...order, status: "DELIVERED" };
          }
          return order;
        });

        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        return updatedOrders;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Cancel order (only if PLACED)
  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId
        ? { ...order, status: "CANCELLED" }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Empty orders UI
  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <div className="empty-orders-box">
          <span className="order-icon">📦</span>
          <h2>No orders yet</h2>
          <p>You haven’t placed any orders yet.</p>
          <button onClick={() => navigate("/products")}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h2>My Orders</h2>

      {orders.map(order => (
        <div
          key={order.id}
          style={{
            padding: 16,
            marginBottom: 20,
            border: "1px solid #ddd",
            borderRadius: 8
          }}
        >
          {/* Progress Bar */}
          <div className="progress-container">
            <div className={`progress-step ${order.status !== "PLACED" ? "active" : ""}`}>
              Placed
            </div>
            <div
              className={`progress-step ${
                order.status === "SHIPPED" || order.status === "DELIVERED"
                  ? "active"
                  : ""
              }`}
            >
              Shipped
            </div>
            <div
              className={`progress-step ${
                order.status === "DELIVERED" ? "active" : ""
              }`}
            >
              Delivered
            </div>
          </div>

          {/* Order Info */}
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Date:</b> {order.date}</p>
          <p><b>Payment:</b> {order.paymentMethod}</p>

          <p>
            <b>Status:</b>{" "}
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </p>

          <p><b>Total:</b> ₹{order.total}</p>

          {/* Cancel Button */}
          {order.status === "PLACED" && (
            <button
              onClick={() => cancelOrder(order.id)}
              style={{
                marginTop: 10,
                padding: "6px 14px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer"
              }}
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orders;
