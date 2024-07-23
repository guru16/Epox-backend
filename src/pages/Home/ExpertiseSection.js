import React from "react";
import { ABOUT_EXPERTISE } from "../../utils/constants";

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="about-expertise">
              <h6 className="sm-title">Expertise</h6>
              <h4 className="section-title">
                Milestones that we proudly accomplished &amp; lead us forward.
              </h4>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {ABOUT_EXPERTISE.map((data, index) => (
                <div className="col-md-4" key={index.key}>
                  <div className="custom-card">
                    <div className="card-content">
                      <div className="card-value">{data.value}</div>
                      <p>{data.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
