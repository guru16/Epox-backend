import React, { useState } from "react";
import { PRODUCTS_DATA } from "../../utils/constants";
import ProductCard from "./ProductCard";

import Filter from "./Filter";
import Breadcrumb from "./Breadcrumb";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);

  const handleFilterChange = (category) => {
    if (category === "all") {
      setFilteredProducts(PRODUCTS_DATA);
    } else {
      const filtered = PRODUCTS_DATA.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="product-page">
      <div className="container">
        <Breadcrumb />
        <div className="products-wrapper">
          <div className="row">
            <h1 className="page-title">Resin Tables</h1>
            <Filter onFilterChange={handleFilterChange} />
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
