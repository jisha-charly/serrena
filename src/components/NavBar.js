import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Backdrop */}
      {isMenuOpen && <div className="backdrop" onClick={() => setIsMenuOpen(false)} />}

      {/* Navbar */}
      <nav className="navbar">
        {/* Hamburger Menu */}
        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Menu */}
        <div className="nav-menu large-screen">
          <Link to="/shop"style={{ textDecoration: "none", }}>SHOP</Link>
          <Link to="/men"style={{ textDecoration: "none", }}>MEN</Link>
          <Link to="/women"style={{ textDecoration: "none",  }}>WOMEN</Link>
          <Link to="/kids"style={{ textDecoration: "none" }}>KIDS</Link>
        </div>

        {/* Centered Brand */}
        <div className="nav-center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="brand-title"style={{ textDecoration: "none",  }}>SERRENA</span>
          </Link>
        </div>

        {/* Right-side Links */}
        <div className="nav-menu large-screen">
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>

          {/* Icons */}
          <div className="icons-large-screen">
            <span className="icon" onClick={() => setShowSearch(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/shop">SHOP</Link>
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
      {/* {/* Search Box */}
      {showSearch && (
        <div className="search-container" ref={searchRef}>
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
          <button className="close-btn" onClick={() => setShowSearch(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
