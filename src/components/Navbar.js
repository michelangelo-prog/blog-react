import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const openMobileNavbar = (navbar, navbarToggle) => {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  };

  const closeMobileNavbar = (navbar, navbarToggle) => {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  };

  const getNavbar = () => {
    return document.getElementById("navbar");
  };

  const getNavbarToggle = (navbar) => {
    return navbar.querySelector(".navbar-toggle");
  };

  const handleOpenNavigationClick = () => {
    const navbar = getNavbar();
    const navbarToggle = getNavbarToggle(navbar);
    if (navbar.classList.contains("opened")) {
      closeMobileNavbar(navbar, navbarToggle);
    } else {
      openMobileNavbar(navbar, navbarToggle);
    }
  };

  const closeNavigationMenuWhenClickOnNavbar = () => {
    const navbar = getNavbar();
    const navbarToggle = getNavbarToggle(navbar);
    closeMobileNavbar(navbar, navbarToggle);
  };

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <Link to="/" className="home-link" onClick={closeNavigationMenuWhenClickOnNavbar}>
          Food blog
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Open navigation menu"
          onClick={handleOpenNavigationClick}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div
          className="navbar-menu"
          onClick={closeNavigationMenuWhenClickOnNavbar}
        >
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
