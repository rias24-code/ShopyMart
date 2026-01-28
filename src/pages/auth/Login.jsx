import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import Notification from "./Notification";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase/firebase";

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

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    dispatch({
      type: "LOGIN",
      payload: { email: user.email }
    });

    showMessage("success", `Welcome ${user.displayName} 🛒`);
    setTimeout(() => navigate("/home"), 1500);

  } catch (error) {
    showMessage("error", "Google login failed");
    console.error(error);
  }
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

    <Notification type={notification?.type} message={notification?.message} />
    <form onSubmit={handleSubmit}>
     <input type="email" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)} />

      <input type="password" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)} />

      <button type="submit">Login</button>
<button className="google-btn" onClick={handleGoogleLogin}>
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="google"
  />
  Sign in with Google
</button>

    </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
