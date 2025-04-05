import React, { useRef, useState, useEffect } from "react";
import "../Styles/navbar.css";
import images from "../../Utils/Images";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoBagSharp, IoClose } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";

function Navbar() {
  const [isDropdownopen, setIsDropdownopen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // checking if the click was outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownopen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      //remove eventlistener when component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const hideDropdown = () => {
    setIsDropdownopen(false);
    if (window.innerWidth <= 990) setIsMobileMenuOpen(false);
  };

  const hideMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar_wrapper">
      <header className="navbar">
        <div className="ham-logo">
          <button
            className="mobile_menu_btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoClose size={30} className="close_icon" />
            ) : (
              <FaBarsStaggered size={24} className="logo-icon"/>
            )}
          </button>
          <div className="logo">
            <img
              src={images.logo}
              alt="ZR logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        {isMobileMenuOpen && <div className="overlay_open overlay"></div>}
        <nav className={`nav_links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <NavLink to="/" className="navlist_items" onClick={hideMobileMenu}>
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="navlist_items"
              onClick={hideMobileMenu}
            >
              About Us
            </NavLink>
            <div className="navlist_items dropdown">
              <button
                onClick={() => setIsDropdownopen(!isDropdownopen)}
                ref={dropdownRef}
              >
                Categories
                <RxCaretDown
                  size={24}
                  strokeWidth={1}
                  className={`caret_icon ${isDropdownopen ? "" : "reversed"}`}
                />
              </button>
              <ul
                className={` categories_list
                ${isDropdownopen ? "" : "categories_list_hidden"}
              `}
              >
                <li>
                  <NavLink
                    to="../categories/footwear"
                    className="navlist_items"
                    onClick={hideDropdown}
                  >
                    Footwear
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/bags"
                    className="navlist_items"
                    onClick={hideDropdown}
                  >
                    Bags
                  </NavLink>
                </li>
                <li>
                   <NavLink
                    to="/categories/belts"
                    className="navlist_items"
                    onClick={hideDropdown}
                  >
                    Belts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/wallets"
                    className="navlist_items"
                    onClick={hideDropdown}
                  >
                    Wallet
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/footwear"
                    className="navlist_items"
                    onClick={hideDropdown}
                  >
                    Others
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="contact"
              className="navlist_items"
              onClick={hideMobileMenu}
            >
              Contact
            </NavLink>
          </ul>
        </nav>

        <div className="icons">
          <button>
            <FaSearch size={21} style={{ cursor: "pointer" }} className="logo-icon"/>
          </button>
          <button>
            <IoBagSharp size={21} style={{ cursor: "pointer" }} className="logo-icon"/>
          </button>
          <button>
            <FaUserAlt size={21} style={{ cursor: "pointer" }} className="logo-icon"/>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
