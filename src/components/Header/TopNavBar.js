import React from "react";
import "../Header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPhone,
  faUser,
  faUserPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const TopNavBar = () => {
  return (
    <section className="top-nav-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-7 col-md-5">
            <div className="input-group search-bar">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search Products"
              />
            </div>
          </div>
          <div className="col-5 col-md-7">
            <div className="login-info">
              <ul className="list-content">
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="icon" icon={faUser} /> <span className="md-none">Login</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="icon" icon={faUserPlus} /> <span className="md-none">Register</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon className="icon" icon={faPhone} /> <span className="md-none">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="cart-icon">
                    <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                    <span className="badge">0</span> <span className="md-none"> Items</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavBar;
