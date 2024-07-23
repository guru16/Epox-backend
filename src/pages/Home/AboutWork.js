import React from "react";
import "../../pages/Home/home.css";
import aboutImg from "../../assets/images/about_image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AboutWork = () => {
  return (
    <section className="work-different-section">
      <div className="container">
        <div className="work-different-wrap">
          {/* Left side with image */}
          <div className="image-container">
            <img src={aboutImg} alt="Image Alt Text" className="img-fluid" />
            <div className="image-overlay">
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            </div>
          </div>
          {/* Right side with card or white box */}
          <div className="content-box">
            <h6 className="sm-title">WE WORK DIFFERENTLY</h6>
            <h2 className="big-heading">
              With design & conceptual decisions, we create value for the
              objects.
            </h2>
            <p className="description">
              Our core objective is to inspire customers and create a perfect
              ambiance, which is a combination of ideal lighting and exquisite
              home décor.
            </p>
            {/* Tabs */}
            <div className="tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item active" role="presentation">
                  <button
                    className="nav-link active"
                    id="vision-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#vision"
                    type="button"
                    role="tab"
                    aria-controls="vision"
                    aria-selected="true"
                  >
                    Vision
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="mission-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#mission"
                    type="button"
                    role="tab"
                    aria-controls="mission"
                    aria-selected="false"
                  >
                    Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="value-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#value"
                    type="button"
                    role="tab"
                    aria-controls="value"
                    aria-selected="false"
                  >
                    Value
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="vision"
                  role="tabpanel"
                  aria-labelledby="vision-tab"
                >
                  <p>Our vision is to provide the most innovative and comprehensive range of products for lighting and home décor that will offer our clients varied choices. A one stop shop for all interior decoration needs.</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="mission"
                  role="tabpanel"
                  aria-labelledby="mission-tab"
                >
                  <p>Our vision is to provide the most innovative and comprehensive range of products for lighting and home décor that will offer our clients varied choices. A one stop shop for all interior decoration needs.</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="value"
                  role="tabpanel"
                  aria-labelledby="value-tab"
                >
                  <p>Our vision is to provide the most innovative and comprehensive range of products for lighting and home décor that will offer our clients varied choices. A one stop shop for all interior decoration needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
