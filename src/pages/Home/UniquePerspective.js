import React from "react";
import "../../pages/Home/home.css";
import CardSlider from "./CardSlider";

const UniquePerspective = () => {
  return (
    <section className="unique-perspective-section">
      <div className="text-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="sm-title">UNIQUE PERSPECTIVE</h6>
              <h2 className="section-title">
                Design, followed by Form & Function. Our core values allow us to
                innovate & push forward.
              </h2>
            </div>
            <div className="col-md-6">
              <p className="section-description">
                Our innovation is backed by a team of designers with a rich
                experience and exposure to lighting engineering and home décor
                trends. The designers here design the products after various
                brainstorming sessions with the team.
              </p>
              <p className="section-description">
                Diya Lighting Studio specializes in providing exemplary service,
                and products that reflect creativity, innovation, and design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardSlider />
    </section>
  );
};

export default UniquePerspective;
