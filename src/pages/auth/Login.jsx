import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import Notification from "./Notification";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const showMessage = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      showMessage("error", "Email and password required");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      showMessage("error", "No account found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      dispatch({ type: "LOGIN", payload: { email } });
      showMessage("success", "Welcome back to ShopyMart 🛒");

      setTimeout(() => navigate("/home"), 1500);
    } else {
      showMessage("error", "Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <Notification
          type={notification?.type}
          message={notification?.message}
        />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
