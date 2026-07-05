import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <NavLink to="/">
              <img
                src="https://cdn.dribbble.com/userupload/47577791/file/25dd269a09491e2a44c8437764fb5473.png"
                alt="website logo"
              />
            </NavLink>
          </div>
          <div className="footer-social">
            <NavLink
              to="https://www.instagram.com/corebtr/"
              target="_blank"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@corebtrbyzainabvora"
              target="_blank"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>

        {/* STUDY */}
        <div className="footer-section">
          <h3 className="footer-title">Study Resources</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/workbooks"> Workbooks &amp; Notes</NavLink>
            </li>
            <li>
              <NavLink to="/pyqs-book"> PYQs Book</NavLink>
            </li>
            <li>
              <NavLink to="/corebtr-offline">CoreBTR Offline</NavLink>
            </li>
            <li>
              <NavLink to="/corebtr-bootcamp">CoreBTR Bootcamp</NavLink>
            </li>
          </ul>
        </div>

        {/* PLANS */}
        <div className="footer-section">
          <h3 className="footer-title">Plans & Purchases</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/solo-plans">Solo Plans</NavLink>
            </li>
            <li>
              <NavLink to="/group-plans">Group Plans</NavLink>
            </li>
            <li>
              <NavLink to="/shipping-delivery">Shipping & Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/cancellation-refund">Cancellation & Refund</NavLink>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ's</NavLink>
            </li>
            <li>
              <NavLink to="/device-policy">Device Policy</NavLink>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="footer-section">
          <h3 className="footer-title">Legal & Updates</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/fair-usage-policy"> Fair Usage Policy</NavLink>
            </li>
            <li>
              <NavLink to="/newsletter-form">Newsletter</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 CoreBTR, All rights reserved. |{" "}
          <span>Designed & Managed By:</span>{" "}
          <NavLink to="https://believersdestination.com/" target="_blank">
            Believers Destination Pvt Ltd
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
