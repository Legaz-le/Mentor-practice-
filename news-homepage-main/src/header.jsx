import "./css/header.css";
import logo from "./assets/images/logo.svg";
import { useState,useEffect } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "";
    }

    // Cleanup function
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="img-header">
        <img src={logo} alt="log" />
      </div>
      <div className="header-section">
        <a className="header-button">Home</a>
        <a className="header-button">New</a>
        <a className="header-button">Popular</a>
        <a className="header-button">Trending</a>
        <a className="header-button">Categories</a>
      </div>
      <button className="menu-btn" onClick={toggleNav}>
        ☰
      </button>

      {/* Mobile Sidebar */}
      <div className={`sidenav ${isNavOpen ? "active" : ""}`} id="mySidenav">
        <button className="close-btn" onClick={closeNav}>
          &times;
        </button>
        <div className="nav-links">
          <a className="nav-link" onClick={closeNav}>
            Home
          </a>
          <a className="nav-link" onClick={closeNav}>
            New
          </a>
          <a className="nav-link" onClick={closeNav}>
            Popular
          </a>
          <a className="nav-link" onClick={closeNav}>
            Trending
          </a>
          <a className="nav-link" onClick={closeNav}>
            Categories
          </a>
        </div>
      </div>
      {isNavOpen && <div className="overlay" onClick={closeNav} />}
    </header>
  );
};

export default Header;
