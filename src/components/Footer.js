import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaMountain } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          SIGN UP TO OUR MAILING LIST
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Blog</Link>
            <Link to="/">Work With Us</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Shipping</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Customer Service</h2>
            <Link to="/">Need Help?</Link>
            <Link to="/">Returns Policy</Link>
            <Link to="/">1hr Click & Collect</Link>
            <Link to="/">Afterpay</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BLDRNG <FaMountain className="mountain" />
            </Link>
          </div>
          <small className="website-rights">BLDRNG ©2021</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <AiFillFacebook />
            </Link>
            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <GrInstagram />
            </Link>
            <Link
              to="/"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <AiFillTwitterCircle />
            </Link>
            <Link
              to="/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <AiFillYoutube />
            </Link>
            <Link
              to="/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="Linkedin"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
