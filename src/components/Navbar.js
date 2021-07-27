import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaMountain, FaBars } from "react-icons/fa";
import React, { useState, useEffect, Fragment } from "react";
import { MdClose } from "react-icons/md";
import { Button } from "./Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BLDRNG <FaMountain className="mountain" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <MdClose className="closeIcon" />
            ) : (
              <FaBars className="barIcon" />
            )}
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
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
