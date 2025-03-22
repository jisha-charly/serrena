import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import product1 from "./images/p1.avif";
import product2 from "./images/p2.avif";
import product3 from "./images/p3.avif";
import product4 from "./images/p4.webp";
import "./BestSeller.css";

// Product Data
const products = [
  { id: 1, image: product2, title: "OVERSIZED FIT COTTON T-SHIRT", price: "$190", discount: "-15%" },
  { id: 2, image: product1, title: "MEN'S BLACK SWEATER", price: "$320", discount: null, marquee1: true },
  { id: 3, image: product3, title: "BUTTON-DETAIL JACKET", price: "$420", discount: "-20%" },
  { id: 4, image: product4, title: "WOMEN SOLID SLIM FIT SUIT", price: "$420", discount: null },
];

// Marquee Component
const Marquee = () => (
  <div className="marquee1">
    <span>SEE MORE BEST SELLER → SEE MORE BEST SELLER →</span>
  </div>
);

// Discount Badge Component
const DiscountBadge = ({ discount }) => (
  <div className="discount-badge">{discount}</div>
);

// Main Component
const BestSeller = () => {
  return (
    <div className="ms-5 my-5 me-5">
      <h2 className="mb-4">BEST SELLER</h2>
      <div className="row g-4 mt-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`col-lg-3 col-md-4 col-sm-6 ${index === 1 ? "taller-card" : ""}`}
          >
            <div className="card border-0  position-relative">
              
              {/* Discount Badge on first and third images */}
              {(index === 0 || index === 2) && (
                <DiscountBadge discount={product.discount} />
              )}

              {/* Image and Hover Effects */}
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top product-img"
                />

                <button className="buy-now-btn">Buy Now</button>

                {/* Marquee for the second image */}
                {product.marquee1 && <Marquee />}
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text fw-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
