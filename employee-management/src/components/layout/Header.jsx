import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="App Logo" />
        <h1>Employee Management System</h1>
      </div>

      <div className="Logout">
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: "6px" }} />
          Logout
        </button>
      </div>
    </header>
  );
}
