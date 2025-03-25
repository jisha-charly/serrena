import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopPage.css";
import { Navbar } from "react-bootstrap";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
   <> <NavBar1/>
    <div className="container my-5" style={{marginTop:"500px"}}>
      
      <h1 className="text-center fw-bold">SHOP</h1>
      <nav className="breadcrumb justify-content-center">
       <p><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>{' > '} <span>SHOP</span></p>
      </nav>

      {/* Category Filter */}
      <div className="d-flex  gap-3 my-4">
        {["All", "Men", "Women", "Kids"].map((category) => (
          <button
            key={category}
            className={`btn btn-outline-dark ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row gy-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card product-card">
                <div className="img-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                  />
                  <span className="discount-badge">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="buy-btn">Buy Now</button>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-muted">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ShopPage;
