import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer>
      <div className="f-container">
        <div className="footer-coln1">
          <Logo />
          <div className="f-logo-right">
            <h3>Ready for your setup?</h3>
            <button className="footer-btn">Get started</button>
          </div>
        </div>
        <div className="footer-line"></div>

        <div className="footer-coln2">
          <div className="footer-news">
            <h3>Subscribe to our newsletter!</h3>
            <div className="footer-input">
              <input type="email" placeholder="Email address" />
              <button>Sign up</button>
            </div>
          </div>

          <div className="footer-list">
            <ul>
              <li className="b">Company</li>
              <li>About Us</li>
              <li>Patners & Affiliates</li>
            </ul>

            <ul>
              <li className="b">Products</li>
              <li>How it works</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>

            <ul>
              <li className="b">Support</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
