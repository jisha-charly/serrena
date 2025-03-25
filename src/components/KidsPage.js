import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopPage.css";  // Use the same CSS styles
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const KidsPage = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filteredMen = response.data.filter(
          (product) => product.category.toLowerCase().includes("men")
        );
        setMenProducts(filteredMen);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchMenProducts();
  }, []);

  return (
    <>
      <NavBar1 />
      <div className="container my-5">
        <h1 className="text-center fw-bold">Kid's Collection</h1>
        <nav className="breadcrumb justify-content-center">
         <p><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>{' > '} <span>KIDS</span></p>
        </nav>

        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {menProducts.length > 0 ? (
              menProducts.map((product) => (
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
              ))
            ) : (
              <p className="text-center">No men's products found.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default KidsPage;
