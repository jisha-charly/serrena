import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import "./ProductScroll.css";

export default function ProductScroll() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
      );
    }, 6000); // Auto scroll every 3 seconds
 */
   /*  return () => clearInterval(interval); // Cleanup on unmount
  }, [products, itemsPerPage]); */

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  const scrollRight = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  return (
    <div className="container  position-relative" style={{marginTop:"230px"}}>
      <h2 className="fw-bold" style={{ fontSize: "40px", marginBottom: "80px" }}>
        YOU MAY ALSO LIKE
      </h2>

      {/* Left Arrow */}
      <button className="scroll-btn left" onClick={scrollLeft} disabled={currentIndex === 0}>
        &#10094;
      </button>

      <div className="scroll-wrapper">
        <div
          className="scroll-container"
          ref={scrollRef}
          style={{ transform: `translateX(-${currentIndex * 260}px)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img className="product-image" src={product.image} alt={product.title} />
              <div className="overlay">
                <Button variant="dark" className="buy-now1">
                  Buy Now
                </Button>
              </div>
              <h6 className="text-center mt-2">{product.title}</h6>
              <p className="text-center">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="scroll-btn right"
        onClick={scrollRight}
        disabled={currentIndex + itemsPerPage >= products.length}
      >
        &#10095;
      </button>
    </div>
  );
}
