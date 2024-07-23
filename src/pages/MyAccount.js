import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../../src/pages/myAccount.css";

const MyAccount = () => {
  return (
    <section className="my-account">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Diya Lighting Studio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My account
            </li>
          </ol>
        </nav>
        <form className="form-main-wrap">
          <div className="row">
            <div className="col-md-6">
              <LoginForm />
            </div>
            <div className="col-md-6">
              <RegisterForm />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyAccount;
