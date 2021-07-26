import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaMountain, FaBars } from "react-icons/fa";
import React, { useState, Fragment } from "react";
import { GrClose } from "react-icons/gr";
import { Button } from "./Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BLDRNG <FaMountain />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaBars /> : <GrClose />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/indoor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Indoor
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/outdoor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Outdoor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gear" className="nav-links" onClick={closeMobileMenu}>
                Gear
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonSize="btn--large">
              Sign Up
            </Button>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
