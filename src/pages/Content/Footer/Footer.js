import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section style={{ backgroundColor: "#fa7d9a33" }}>
      <div className="container">
        <div className="fooet_top section">
          <div className="footer_logo" style={{ textAlign: "center" }}>
            <Link to="/">
              <img src="images/main-logo.png" alt="main logo" />
            </Link>
          </div>
          <div className="social_links">
            <a href="mailto:info@joudtaxi.com">
              <img src="images/social/mail.png" alt="mail" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/social/facebook.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/social/instagram.png" alt="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/social/linkedin.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="images/social/twitter.png" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f9c0ce" }} className="footer_bottom">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p>© 2023 Copyright Joud Taxi. All Rights Reserved</p>
            </div>
            <div>
              <p>
                Made with ❤️ by{" "}
                <a
                  href="https://codanity.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Codanity
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
