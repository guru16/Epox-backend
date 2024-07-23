import React from "react";
import "../../pages/Home/home.css";
import { CARD_CONTENT } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <div className="container">
        <div className="inner-content">
          <h6 className="sm-title">HOW WE WORK</h6>
          <h3 className="section-subtitle">
            Our <span className="text_primary">Design Process</span> is a series
            of steps that we use in creating functional decor.
          </h3>
        </div>
        <div className="row">
          {CARD_CONTENT.map((card, index) => (
            <div className="col-xl-3 col-lg-6 mb-4" key={index}>
              <div className="card number-box">
                <div className="number-box-number">{card.stepNo}</div>
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                  <a href={card.link} className="card-link">
                    Read More  <FontAwesomeIcon icon={faArrowRightLong} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
