import { useState, useEffect, useRef } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./ProductScroll.css";

export default function Product() {
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
    <Container className="position-relative my-5">
      <h2 className="fw-bold text-center mb-5" style={{ fontSize: "40px" }}>
        YOU MAY ALSO LIKE
      </h2>

      {/* Left Arrow */}
      <button
        className="scroll-btn left"
        onClick={scrollLeft}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>

      <div className="scroll-wrapper">
        <div
          className="scroll-container"
          ref={scrollRef}
          style={{ transform: `translateX(-${currentIndex * 260}px)` }}
        >
          {products.map((product) => (
            <Card key={product.id} className="product-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="dark">Buy Now</Button>
              </Card.Body>
            </Card>
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
    </Container>
  );
}
