import React from "react";
import { Link } from "react-router-dom";
import "../../src/pages/myAccount.css";
import "../../src/pages/contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faEnvelope,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <section className="contact-us-wrapper">
      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Diya Lighting Studio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
      <div className="about-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card cst-card">
                <FontAwesomeIcon icon={faHeadset} />
                <h6 className="card-title">Heading</h6>
                <p className="card-content">
                  Preferred timings for call : 10 AM to 07 PM
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card cst-card">
                <FontAwesomeIcon icon={faEnvelope} />
                <h6 className="card-title">test123@gmail.com</h6>
                <p className="card-content">
                  Email us any time, we usually reply within 12 hours.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card cst-card">
                <FontAwesomeIcon icon={faHouseChimney} />
                <h6 className="card-title">
                  Diya Lighting Studio (A unit of Ashish Engineers)
                </h6>
                <p className="card-content">
                  Please schedule your meeting before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="headline-blc">
          <h6 className="sm-title">Fill The form</h6>
          <h2 className="section-subtitle">
           Let's discuss your project
          </h2>
        </div>
        <form className="form-wrapper">
          <div className="mb-3">
            <input type="email" className="form-control" id="loginEmail" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="loginEmail" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="loginEmail" placeholder="Mobile Number" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="loginEmail" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <textarea
              type="email"
              className="form-control"
              id="loginEmail"
              rows="4"
              placeholder="Hello, I am interested in..."
            />
          </div>
          <div className="btn-block">
            <button className="btn btn-primary">Add Testimonial</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
