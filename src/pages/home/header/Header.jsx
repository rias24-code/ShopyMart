import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import useLogout from "../../../hooks/useLogout";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/AuthContext";

import "./Header.css";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Products", path: "/products" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Cart", path: "/cart" },
  { label: "Orders", path: "/orders" }
];

const Header = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const { state } = useContext(AuthContext);
  const logout = useLogout();

  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const location = useLocation();

  const wishlistCount = useSelector(
    state => state.wishlist?.items?.length || 0
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">

          {/* LOGO */}
          <Link to="/home" className="logo">
            <img src="/images/shopify.png" alt="Logo" className="logo-img" />
            <h3>Shopy<span>Mart</span></h3>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-desktop">
            {state.isAuthenticated &&
              navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {item.label}
                  {item.label === "Wishlist" && wishlistCount > 0 && ` (${wishlistCount})`}
                </Link>
              ))}

            {state.isAuthenticated ? (
              <button
                className="nav-link logout-btn"
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}

            <button className="icon-btn" onClick={toggleTheme}>
              {mode === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          <div className="nav-mobile">
            <button className="menu-btn" onClick={() => setOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
{open && (
  <div className="drawer-overlay" onClick={() => setOpen(false)}>
    <aside className="drawer" onClick={e => e.stopPropagation()}>
      <div className="drawer-header">
        <span>Menu</span>
        <button className="close-btn" onClick={() => setOpen(false)}>❌</button>
      </div>

      {state.isAuthenticated &&
        navItems.map(item => (
          <Link
            key={item.label}
            to={item.path}
            className="drawer-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
            {item.label === "Wishlist" && wishlistCount > 0 && ` (${wishlistCount})`}
          </Link>
        ))}

      {state.isAuthenticated ? (
        <button
          className="drawer-link"
          onClick={() => {
            setOpen(false);
            setShowLogoutModal(true);
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
      )}

      <button className="drawer-theme-btn" onClick={toggleTheme}>
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </aside>
  </div>
)}


      {/* ================= LOGOUT MODAL ================= */}
      {showLogoutModal && (
        <div className="logout-overlay">
          <div className="logout-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>

            <div className="logout-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>

              {/* ✅ THIS IS THE LINE YOU ASKED ABOUT */}
              <button
                className="confirm-btn"
                onClick={() => {
                  setShowLogoutModal(false);
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
