import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  // Close search when clicking outside
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
      <nav className="navbar">
        <div className="nav-left">
          <a href="#">SHOP</a>
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
        </div>
        <div className="nav-center">SERRENA</div>
        <div className="nav-right">
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>

          {/* Search Icon */}
          <span className="icon" onClick={() => setShowSearch(true)}>
            <FontAwesomeIcon icon={faSearch} />
          </span>

          <span className="icon">
            <FontAwesomeIcon icon={faShoppingBag} />
          </span>
        </div>
      </nav>

      {/* Search Box */}
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
