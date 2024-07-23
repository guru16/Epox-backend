import React, { useState } from "react";
import { Tab, Tabs, TabPane } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Products/productView.css";

const ProductReview = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="product-tabs">
      <Tabs defaultActiveKey="additionalInfo" id="product-tabs">
        <Tab
          eventKey="additionalInfo"
          title="Additional Information"
          className="tab-content-wrap"
        >
          <h3>Additional information</h3>
          <div className="tab-inner-content">
            <div className="sp-info">
              <h5>Seating Capacity</h5>
              <p className="seating-capacity">
                2 Seater : 2' x 2', 2 Seater : 3' x 2', 4 Seater ; 3'x 3', 4
                Seater : 4' x 2', 4 Seater : 4' x 3', 6 Seater : 5′ x 3′, 6
                Seater : 6' x 3', 6 Seater : 7'x 3', 6 Seater : 7' x 4', 8
                Seater : 8' x 3', Mega 8 Seater : 8' x 4', 10 Seater : 9' x 3',
                10 Seater : 10'x 3', Mega 10 Seater : 9' x 4', Mega 10 Seater :
                10' x 4'
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="reviews" title="Reviews" className="tab-content-wrap">
          <div className="tab-inner-content">
            <h3>Reviews</h3>
            <p>There are no reviews yet.</p>
            <p className="mb-0">
              Be the first to review “Resin Table: DLS-WRT-7104”
            </p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="review-form">
              <div className="form-group">
                <label htmlFor="rating">Your rating *</label>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${rating > index ? "filled" : ""}`}
                      onClick={() => handleRating(index)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="review">Your review *</label>
                <textarea
                  id="review"
                  className="form-control"
                  required
                  rows="3"
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="saveInfo"
                />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className="btn-block">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductReview;
