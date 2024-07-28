import React from "react";
import "../../src/pages/testimonials.css";
import "../../src/pages/myAccount.css";

const Testimonials = () => {
  return (
    <section className="testimonials-wrapper">
      <div className="form-container">
        <div className="headline-blc">
          <h6 className="sm-title">Fill The form</h6>
          <h2 className="section-subtitle">Please write a testimonial and motivate us:</h2>
        </div>
        <form className="form-wrapper">
          <small>
            <span className="required-icn">*</span>Required
          </small>
          <div className="mb-3">
            <label className="form-label">
              Full Name
              <span className="required-icn">*</span>
            </label>
            <input type="email" className="form-control" id="loginEmail" />
            <small className="headline-text">What is your full name?</small>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email
              <span className="required-icn">*</span>
            </label>
            <input type="email" className="form-control" id="loginEmail" />
            <small className="headline-text">Would you like to share your email?</small>
          </div>
          <div className="mb-3">
            <label className="form-label">
              City
              <span className="required-icn">*</span>
            </label>
            <input type="email" className="form-control" id="loginEmail" />
            <small className="headline-text">What is your city name?</small>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Heading
              <span className="required-icn">*</span>
            </label>
            <input type="email" className="form-control" id="loginEmail" />
            <small className="headline-text">A headline for your testimonial.</small>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Testimonial
              <span className="required-icn">*</span>
            </label>
            <textarea
              type="email"
              className="form-control"
              id="loginEmail"
              rows="6"
            />
            <small className="headline-text">What do you think about us</small>
          </div>
          <div className="btn-block">
            <button className="btn btn-primary">Add Testimonial</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
