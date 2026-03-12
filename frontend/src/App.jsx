import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import DashBoard from "./pages/DashBoard";
import Loginform from "./pages/Loginform";
import Registerform from "./pages/Registerform";

function App() {

  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="auth-splash">
        <div className="auth-spinner" />
        <p className="auth-splash-text">ChitChatCode</p>
      </div>
    );
  }

  return (
    <BrowserRouter>

      <Routes>

        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Loginform />
          }
        />

        {/* Register Route */}
        <Route
          path="/register"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Registerform />
          }
        />

        {/* Dashboard Route (Protected) */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated
              ? <DashBoard />
              : <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;