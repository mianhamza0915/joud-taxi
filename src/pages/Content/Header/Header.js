import "./Header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleClickScroll = (e) => {
    console.log(e.target.innerText);
    const element = document.getElementById(e.target.innerText);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <section
      className={scroll ? "main_header scrolled" : "main_header"}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="main_logo">
            <Link to="/">
              <img src="images/main-logo.png" alt="main logo" />
            </Link>
          </div>
          <div className="main_menu">
            <Link onClick={handleClickScroll}> Introduction</Link>
            <Link onClick={handleClickScroll}>Features</Link>
            <Link onClick={handleClickScroll}>Tokenomics</Link>
            <Link onClick={handleClickScroll}>Roadmap</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
