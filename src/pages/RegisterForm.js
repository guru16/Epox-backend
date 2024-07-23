import React from "react";
import "../../src/pages/myAccount.css";

const RegisterForm = () => {
  return (
    <div className="form-wrapper">
      <h2>Register</h2>
      <div className="mb-3">
        <label className="form-label">
          Email address
          <span className="text-danger">*</span>
        </label>
        <input type="email" className="form-control" id="registerEmail" />
        <small className="form-text text-muted">
          A link to set a new password will be sent to your email address.
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
