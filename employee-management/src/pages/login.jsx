import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    login();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left-panel">
          <h2 className="logo">HRMS</h2>

          <div className="avatar">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
            />
          </div>

          <h3 className="signin-title">Sign In</h3>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {errors.username && <p className="error-text">{errors.username}</p>}

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}

            <button type="submit" className="btn">
              Sign In
            </button>
          </form>

          <a href="#" className="forgot">
            Forgot Password?
          </a>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <img
            src="https://illustrations.popsy.co/amber/work-from-home.svg"
            alt="HR Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
