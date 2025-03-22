import React from "react";
import "./ShopSection.css";
import manImage from "./images/man.avif";
import womanImage from "./images/woman.avif";

const shopItems = [
  {
    id: 1,
    name: "Men's Collection",
    image: manImage,
  },
  {
    id: 2,
    name: "Women's Collection",
    image: womanImage,
  },
];

const ShopSection = () => {
  return (
    <div className="shop-container">

      {/* Header Row */}
      <div className="shop-header">
        <h2>SHOP</h2>
        <button className="visit-shop">VISIT SHOP</button>
      </div>

      {/* Shop Items */}
      <div className="shop-items">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-card">
            <div className="shop-image-container">
              <img src={item.image} alt={item.name} />
              <div className="text-overlay">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
