import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform any validation or authentication logic here
    navigate("/dashboard"); // Navigate to the dashboard on successful login
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow-lg border-0 rounded-lg my-5">
          <div className="card-body p-4">
            <h3 className="card-title text-center mb-4">Welcome Back</h3>
            <form>
              <div className="form-group mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  placeholder="Enter password"
                  required
                />
              </div>
            <Link to="/dashboard"> 
             <button
                type="button"
                className="btn btn-primary btn-block rounded-0"
                // Call the login handler
              >
                Login
              </button></Link>
            </form>
            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
