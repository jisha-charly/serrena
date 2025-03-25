import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './NavBar1.css';
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
          <Link to="/shop">SHOP</Link>        {/* Navigate to ShopPage */}
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
        </div>

        <div className=""><Link to="/"><span className='nav-center1'>SERRENA</span></Link></div>

        <div className="nav-right">
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>

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
