import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowPlans(false);
    setShowSchedule(false);
    setShowResults(false);
    setShowBooks(false);
  };

  const handlePlansClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handlePlansArrowClick = (e) => {
    e.stopPropagation();
    setShowPlans(!showPlans);
  };

  const handleScheduleClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleScheduleArrowClick = (e) => {
    e.stopPropagation();
    setShowSchedule(!showSchedule);
  };

  const handleResultsClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleResultsArrowClick = (e) => {
    e.stopPropagation();
    setShowResults(!showResults);
  };

  const handleBooksClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleBooksArrowClick = (e) => {
    e.stopPropagation();
    setShowBooks(!showBooks);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            src="https://vidyajeevan.com/wp-content/uploads/2025/04/Apurv-3.webp"
            alt="website logo"
          />
        </NavLink>
      </div>

      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>{" "}
        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowResults(true)}
          onMouseLeave={() => !showNav && setShowResults(false)}
        >
          <button className="dropdown-trigger" onClick={handleResultsClick}>
            <span className="dropdown-text">Results</span>
            <IoIosArrowDown
              className={`arrow-icon ${showResults ? "rotate" : ""}`}
              onClick={handleResultsArrowClick}
            />
          </button>

          {showResults && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowResults(true)}
              onMouseLeave={() => !showNav && setShowResults(false)}
            >
              <NavLink
                to="/inicet-may-result-2026"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                INICET May 2026
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/reviews" onClick={handleCloseNav}>
          Student Reviews
        </NavLink>
        <NavLink to="/contact-us" onClick={handleCloseNav}>
          Contact Us
        </NavLink>
        <NavLink to="/samvedana-opd" onClick={handleCloseNav}>
          SAMVEDANA OPD
        </NavLink>
        <NavLink to="/blogs" onClick={handleCloseNav}>
          Blogs
        </NavLink>
        {/* <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowBooks(true)}
          onMouseLeave={() => !showNav && setShowBooks(false)}
        >
          <button className="dropdown-trigger" onClick={handleBooksClick}>
            <span className="dropdown-text">CoreBTR Books</span>
            <IoIosArrowDown
              className={`arrow-icon ${showBooks ? "rotate" : ""}`}
              onClick={handleBooksArrowClick}
            />
          </button>

          {showBooks && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowBooks(true)}
              onMouseLeave={() => !showNav && setShowBooks(false)}
            >
              <NavLink
                to="/workbooks"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Workbooks &amp; Notes
              </NavLink>

              <NavLink
                to="/pyqs-book"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                PYQs Book
              </NavLink>
            </div>
          )}
        </div> */}
        {/* <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowPlans(true)}
          onMouseLeave={() => !showNav && setShowPlans(false)}
        >
          <button className="dropdown-trigger" onClick={handlePlansClick}>
            <span className="dropdown-text">Buy New Plans</span>
            <IoIosArrowDown
              className={`arrow-icon ${showPlans ? "rotate" : ""}`}
              onClick={handlePlansArrowClick}
            />
          </button>

          {showPlans && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowPlans(true)}
              onMouseLeave={() => !showNav && setShowPlans(false)}
            >
              <NavLink
                to="/solo-plans"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Solo Plans
              </NavLink>
              <NavLink
                to="/group-plans"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Group Plans
              </NavLink>
            </div>
          )}
        </div> */}
        {/* <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowSchedule(true)}
          onMouseLeave={() => !showNav && setShowSchedule(false)}
        >
          <button className="dropdown-trigger" onClick={handleScheduleClick}>
            <span className="dropdown-text">Schedules</span>
            <IoIosArrowDown
              className={`arrow-icon ${showSchedule ? "rotate" : ""}`}
              onClick={handleScheduleArrowClick}
            />
          </button>

          {showSchedule && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowSchedule(true)}
              onMouseLeave={() => !showNav && setShowSchedule(false)}
            >
              <NavLink
                to="/neetpg-bootcamp-schedule"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                NEET PG Bootcamp Schedule
              </NavLink>
              <NavLink
                to="/neetpg-2026-schedule"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                NEET PG 2026 Schedule
              </NavLink>
            </div>
          )}
        </div> */}
        {/* <NavLink
          to="https://drzainabvora.com/about"
          onClick={handleCloseNav}
          target="_blank"
        >
          About Dr. ZV
        </NavLink> */}
        {/* <NavLink
          className="login-signup-cta"
          to="https://portal.corebtr.com/login"
          target="_blank"
          onClick={handleCloseNav}
        >
          Login | Signup
        </NavLink> */}
      </nav>

      <div className="hamburger">
        <button className="hamburger-btn" onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
