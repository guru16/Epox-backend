import React, { useState } from "react";
import "../Header/header.css";
import TopNavBar from "./TopNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [submenuVisible, setSubmenuVisible] = useState({});

  const toggleSubmenu = (menu) => {
    setSubmenuVisible((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Function to handle dropdown toggle on click
  const handleDropdownClick = (menu) => {
    setSubmenuVisible((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Function to close all submenus
  const closeAllSubmenus = () => {
    setSubmenuVisible({});
  };

  return (
    <div>
      <TopNavBar />
      <nav className="navbar navbar-expand-lg app-navbar">
        <div className="container-fluid">
          <div className="nav-bar">
            <a className="navbar-brand" href="#">
              Dummy <span>Logo</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="productsDropdown"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClick("products");
                  }}
                  aria-expanded={submenuVisible.products ? "true" : "false"}
                >
                  Products
                </a>
                <ul
                  className={`dropdown-menu ${submenuVisible.products ? "show" : ""}`}
                  aria-labelledby="productsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Designer Lighting
                    </a>
                  </li>

                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownClick("moreProducts");
                      }}
                      aria-expanded={submenuVisible.moreProducts ? "true" : "false"}
                    >
                      Resin Tables
                    </a>
                    <ul className={`dropdown-menu ${submenuVisible.moreProducts ? "show" : ""}`}>
                      <li>
                        <a className="dropdown-item" href="#">
                          Resin Tables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          CNC Designed Resin Table
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Round Resin Tables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Live Edge Wood Resin Tables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Marble Resin Table
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Water and Beach Theme Resin Tables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Product 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Account
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClick("testimonials");
                  }}
                  aria-expanded={submenuVisible.testimonials ? "true" : "false"}
                >
                  Testimonials
                </a>
                <ul
                  className={`dropdown-menu ${submenuVisible.testimonials ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Give Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      View Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reviews By Location
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Need Custom Design?
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="shopByLocationDropdown"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClick("shopByLocation");
                  }}
                  aria-expanded={submenuVisible.shopByLocation ? "true" : "false"}
                >
                  Shop By Location
                </a>
                <ul
                  className={`dropdown-menu ${submenuVisible.shopByLocation ? "show" : ""}`}
                  aria-labelledby="shopByLocationDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Resin Table in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Resin Table in Amritsar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Resin Table in Calcutta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Resin Table in Calicut
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
