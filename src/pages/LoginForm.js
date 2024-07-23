import React from "react";
import "../../src/pages/myAccount.css";


const LoginForm = () => {
  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <div className="mb-3">
        <label className="form-label">
          Username or email address
          <span className="text-danger">*</span>
        </label>
        <input type="email" className="form-control" id="loginEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Password <span className="text-danger">*</span>
        </label>
        <input type="password" className="form-control" id="loginPassword" />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <div className="btn-block">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <a href="#" className="forgot-password">
          Lost your password?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
