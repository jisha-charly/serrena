import React from "react";
import "./FeaturedProducts.css";
import dressImage from "./images/11.avif";
import jeansImage from "./images/12.avif";
import jacketImage from "./images/13.avif";
import Image from "./images/14.avif";

const products = [
    {
      id: 1,
      name: "VISCOSE SHIRT DRESS",
      price: "$340",
      discount: "-20%",
      image: dressImage,
    },
    {
      id: 2,
      name: "STRAIGHT REGULAR JEANS",
      price: "$220",
      discount: "-15%",
      image: jacketImage,
    },
    {
      id: 3,
      name: "COTTON TWILL JACKET",
      price: "$75",
      discount: "-15%",
      image: jeansImage,
    },
    {
      id: 4,
      name: "COTTON TWILL JACKET",
      price: "$75",
      discount: "-15%",
      image: Image,
    },
];

const FeaturedProducts = () => {
  return (
    <div className="featured-container">
      <h2>FEATURED</h2>
      <div className="products">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`product-card ${product.id === 3 ? "taller-card" : ""}`}
          >
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <span className="discount">{product.discount}</span>

              {/* Marquee only on the third image */}
              {product.id === 3 && (
                <div className="marquee3">
                  <span>FEATURED DEALS • NEW ARRIVALS • LIMITED TIME OFFER</span>
                </div>
              )}

              <button className="buy-now">Buy Now</button>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
