import React from "react";
import { Carousel } from "react-bootstrap";
import "../../pages/main.css";
import "../../pages/Home/home.css";
import slide1 from "../../assets/images/slider-1.webp";
import slide2 from "../../assets/images/slider-2.jpg";
import slide3 from "../../assets/images/slide-3.webp";

const Banner = () => {
  const slides = [
    {
      image: slide1,
      title: "Open the Door to Better kind of Interior.",
      buttons: [
        { text: "View Products", link: "#", variant: "filled" },
        { text: "Contact Us", link: "#", variant: "outline" },
      ],
    },
    {
      image: slide2,
      title: "Transform Your Space with Elegance.",
      buttons: [
        { text: "Shop Now", link: "#", variant: "filled" },
        { text: "Learn More", link: "#", variant: "outline" },
      ],
    },
    {
      image: slide3,
      title: "Enhance Your Living Space with Style.",
      buttons: [
        { text: "Discover More", link: "#", variant: "filled" },
        { text: "Contact Us", link: "#", variant: "outline" },
      ],
    },
  ];

  return (
    <section className="banner-section">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={5000}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h1>{slide.title}</h1>
              <div className="btn-block">
                {slide.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.link}
                    className={`btn ${button.variant === "filled" ? "btn-primary" : "btn-outline-primary"} mr-2`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
