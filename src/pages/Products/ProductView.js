import React, { useState } from "react";
import { PRODUCT_DETAILS } from "../../utils/constants";
import "../Products/productView.css";
import ProductImage from "../../../src/assets/images/about_image.webp";
import product1 from "../../../src/assets/images/product1.webp";
import product3 from "../../../src/assets/images/product3.webp";
import product2 from "../../../src/assets/images/product2.webp";
import ProductReview from "./ProductReview";
import Breadcrumb from "./Breadcrumb";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProductView = () => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const images = [ProductImage, product1, product3, product2];

  const basePrice = 0;
  const productPrice = 19116;
  const totalPrice = basePrice + productPrice * quantity;

  return (
    <div className="container">
      <div className="product-details">
        <Breadcrumb />
        <div className="product-content">
          <div className="left-content">
            <div className="image-gallery" onClick={() => setIsOpen(true)}>
              <img
                src={images[photoIndex]}
                alt="Product"
                className="main-image"
              />
              <div className="overlay">
                <span className="plus-icon">+</span>
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                  imageCaption={`Image ${photoIndex + 1} of ${images.length}`}
                />
              )}
            </div>
          </div>
          <div className="right-content">
            <h1>{PRODUCT_DETAILS.name}</h1>
            <p className="price-range">{PRODUCT_DETAILS.priceRange}</p>
            <div className="product_meta">
              <p className="sku-category">
                <span> SKU: {PRODUCT_DETAILS.sku}</span>{" "}
                <span>
                  Category:{" "}
                  <span className="text-dark">{PRODUCT_DETAILS.category}</span>
                </span>
              </p>
            </div>

            <div className="details">
              <p>
                <strong>
                  Table Top Thickness: {PRODUCT_DETAILS.thickness}
                </strong>
              </p>
              <p className="mb-0">
                <strong>Table Height: {PRODUCT_DETAILS.height}</strong>
              </p>
              <p>({PRODUCT_DETAILS.customizationInfo})</p>
              <p>
                <strong>{PRODUCT_DETAILS.baseIncluded}</strong>
              </p>
              <p>
                <strong>
                  Production & Dispatch Time: {PRODUCT_DETAILS.productionTime}
                </strong>
              </p>
            </div>
            <p className="description">{PRODUCT_DETAILS.description}</p>
            <p className="description">
              <strong>{PRODUCT_DETAILS.description2}</strong>
            </p>
            <p className="tbl_discount">
              <del>20%</del> - 25% discount available on all prices.
            </p>
            <div className="tbl_discount_inclusive_text">
              <ul>
                <li>Prices are INCLUSIVE of black metal base & all taxes.</li>
                <li>Shipping is FREE all across India.</li>
              </ul>
            </div>
            <div className="sizes">
              <div className="title-blc">
                <h6>
                  <strong>Available Sizes</strong>
                </h6>
                <small className="text-danger">
                  Regular Price - Sale Price
                </small>
              </div>

              {PRODUCT_DETAILS.sizes.map((size, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={`sizeOption${index}`}
                  />
                  <label className="form-check-label" htmlFor={`sizeOption${index}`}>
                    <strong>{size.size}</strong>
                    <span>
                      <del>{size.regularPrice}</del>
                      {size.salePrice}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <p className="contact">
              For Custom Sizes Please Call / Whatsapp at: +91-6280684099
            </p>
            <div className="table-options">
              <div className="table-options-header">
                <h6 className="mb-0">Select Table Base/ Legs/ Stand</h6>
                <small className="text_primary">
                  (Cost of table base is included in above prices)
                </small>
              </div>

              <div className="options-group">
                <h6>Table Top Finish</h6>
                <div className="options">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableTopFinish"
                      id="glossyFinish"
                    />
                    <label className="form-check-label" htmlFor="glossyFinish">
                      Glossy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableTopFinish"
                      id="semiGlossFinish"
                    />
                    <label className="form-check-label" htmlFor="semiGlossFinish">
                      Semi-Gloss
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableTopFinish"
                      id="mattFinish"
                    />
                    <label className="form-check-label" htmlFor="mattFinish">
                      Matt
                    </label>
                  </div>
                </div>
              </div>

              <div className="options-group">
                <h6>
                  Table Height <span className="text-danger">*</span>
                </h6>
                <div className="options">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableHeight"
                      id="height30"
                    />
                    <label className="form-check-label" htmlFor="height30">
                      30"
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableHeight"
                      id="height18"
                    />
                    <label className="form-check-label" htmlFor="height18">
                      18"
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tableHeight"
                      id="height15"
                    />
                    <label className="form-check-label" htmlFor="height15">
                      15"
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-details">
              <div className="pricing-info">
                <div className="price-item">
                  <span className="price-label">Table Base Price</span>
                  <span className="price-value">₹{basePrice}</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Product Price</span>
                  <span className="price-value">₹{productPrice}</span>
                </div>
                <div className="price-item total">
                  <span className="price-label">Total</span>
                  <span className="price-value">₹{totalPrice}</span>
                </div>
              </div>

              <div className="quantity-section">
                <div className="quantity-content">
                  <label className="quantity-label">Quantity </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="quantity-input"
                  />
                </div>
                <div className="btn-block">
                  <button className="btn btn-primary">Product Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductReview />
      </div>
    </div>
  );
};

export default ProductView;
