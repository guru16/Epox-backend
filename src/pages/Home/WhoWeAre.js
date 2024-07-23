import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../pages/Home/home.css";
import designerLighting from "../../assets/images/designer-lighting.png";
import homeOfficeDecor from "../../assets/images/home-office-decor.webp";
import resinGlassCreatives from "../../assets/images/clock.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WhoWeAre = () => {
  const cards = [
    {
      image: designerLighting,
      title: "Designer Lighting",
    },
    {
      image: homeOfficeDecor,
      title: "Home & Office Decor",
    },
    {
      image: resinGlassCreatives,
      title: "Resin & Glass Creatives",
    },
  ];

  return (
    <section className="who-we-are-section text-left">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 description-column">
            <h5 className="sm-title">WHO WE ARE</h5>
            <h3 className="section-subtitle">
              Passion Fueled Design <span className="text_primary">Studio</span>
            </h3>
            <p className="section-description">
              We provide the most innovative and comprehensive range of products
              for lighting and home décor that will offer you varied choices.
            </p>
            <a href="#" className="btn btn-primary">
              View Products
            </a>
          </div>
          <div className="col-lg-9 cards-column">
            <div className="row">
              {cards.map((card, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card card-common">
                    <div className="card-image-wrapper">
                      <img
                        src={card.image}
                        className="card-img-top"
                        alt={card.title}
                      />
                      <div className="card-overlay">
                      <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
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

export default WhoWeAre;
