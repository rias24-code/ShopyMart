import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import Notification from "./Notification";

const Register = () => {
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
      showMessage("error", "All fields are required");
      return;
    }

    const user = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    dispatch({ type: "REGISTER" });
    showMessage("success", "Account created successfully 🎉");

    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Account</h2>

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

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
