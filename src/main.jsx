import React from "react"; // Added
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import "./style/global.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store = {store} >
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// npx json-server --watch db.json --port 5000
