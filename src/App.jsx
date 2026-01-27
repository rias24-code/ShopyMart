import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./pages/route/ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProductsPage from './pages/product/ProductPage'
import CartPage from './pages/cart/CartPage'
import WishlistPage from './pages/wishlist/WishlistPage'
import Header from "./pages/home/header/Header";
import Footer from './pages/home/footer/Footer';
import Orders from "./pages/order/Orders";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <div className="app-layout">
      {state.isAuthenticated && <Header />}
      <main className="app-content">
        <Routes>
          <Route path="/" element={
            state.isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
          } />

          <Route path="/login" element={
            state.isAuthenticated ? <Navigate to="/home" /> : <Login />
          } />

          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        </Routes>
      </main>

      {state.isAuthenticated && <Footer />}
    </div>
  );
};

export default App;