import React from "react";
import "../Products/products.css";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-card">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </figure>
        <div className="badge-wrap">
          <span class="badge bg-secondary">Sale</span>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            <span class="price">
              <span class="Price-amount amount">
                <bdi>
                  <span class="Price-currencySymbol">₹</span>19,116
                </bdi>
              </span>
              <span> - </span>
              <span class="Price-amount amount">
                <bdi>
                  <span class="Price-currencySymbol">₹</span>212,400
                </bdi>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
