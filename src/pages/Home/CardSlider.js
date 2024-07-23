import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CARD_DATA } from "../../utils/constants";

// Define PrevArrow and NextArrow components
const PrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const CardSlider = ({ cards }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Render cards from CARD_DATA */}
      {CARD_DATA.map((card, index) => (
        <div key={index} className="card-common">
          <div className="card-image-wrapper">
            <img src={card.image} alt={card.title} className="card-img-top" />
            <div className="card-overlay">
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
