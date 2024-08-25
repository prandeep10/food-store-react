import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaAngleDown } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <FiMenu />
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li className="navbar-item" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(1)}>
            Shop <FaAngleDown />
            {activeDropdown === 1 && (
              <div className="dropdown-overlay">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Category 1</li>
                  <li className="dropdown-item">Category 2</li>
                  <li className="dropdown-item">Category 3</li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar-item" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(2)}>
            Learn <FaAngleDown />
            {activeDropdown === 2 && (
              <div className="dropdown-overlay">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Course 1</li>
                  <li className="dropdown-item">Course 2</li>
                  <li className="dropdown-item">Course 3</li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar-item" onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(3)}>
            Reviews <FaAngleDown />
            {activeDropdown === 3 && (
              <div className="dropdown-overlay">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Product Reviews</li>
                  <li className="dropdown-item">Service Reviews</li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar-item" onMouseEnter={() => toggleDropdown(4)} onMouseLeave={() => toggleDropdown(4)}>
            Our Story <FaAngleDown />
            {activeDropdown === 4 && (
              <div className="dropdown-overlay">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">History</li>
                  <li className="dropdown-item">Mission</li>
                  <li className="dropdown-item">Vision</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-brand">
        <span className="brand-name"><img src="/logo.png" alt="" /></span>
      </div>
      <div className="navbar-right">
        <div className="navbar-icon">
          <FaShoppingCart />
        </div>
        <div className="navbar-icon">
          <FaUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
