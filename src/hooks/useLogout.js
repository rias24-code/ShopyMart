import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { clearCart } from "../features/cart/cartSlice";
import { AuthContext } from "../context/AuthContext";
import { clearWishlist } from "../features/wishlist/wishlistSlice";

const useLogout = () => {

  const { dispatch: authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
      authDispatch({ type: "LOGOUT" });
      dispatch(clearCart());
      dispatch(clearWishlist());
      navigate("/login", { replace: true });
  };
  return logout;
}
export default useLogout;