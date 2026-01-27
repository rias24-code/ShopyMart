import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const {state} = useContext(AuthContext);
    if(!state.isAuthenticated) {
        return <Navigate to='/login' replace />;
    }
    return children;
}   

export default ProtectedRoute;
// It redirects the user to another route programmatically.
// return <Navigate to="/login" replace />; //what it does the Navigate 

// 🔹 What does replace mean?
// It replaces current history
// User cannot go back using browser back button
// 📌 Without replace, user could go back to protected page again (bad UX + security).