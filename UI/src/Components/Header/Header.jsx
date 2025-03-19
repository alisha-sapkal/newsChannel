import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ads_700x70 from "../../assets/img/ads-700x70.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState("right");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const links = [
    {
      to: "/link1",
      text: "Labore sit justo amet eos sed, et sanctus dolor diam eos",
    },
    {
      to: "/link2",
      text: "Gubergren elitr amet eirmod et lorem diam elitr, ut est erat",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + links.length) % links.length);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-light py-2">
        <div className="row align-items-center px-lg-5">
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="text-white text-center py-1 px-3 bg-danger" style={{ width: "100px" }}>
              Trending
            </div>
            <div className="d-flex flex-grow-1 align-items-center ml-3 overflow-hidden position-relative">
              <button className="btn btn-sm btn-light mr-1" onClick={handlePrev}>
                <i className="fa fa-angle-left" />
              </button>
              <div
                className={`text-truncate flex-grow-1 text-center ${
                  direction === "right" ? "slide-right" : "slide-left"
                }`}
              >
                <Link to={links[currentIndex].to} className="text-secondary">
                  {links[currentIndex].text}
                </Link>
              </div>
              <button className="btn btn-sm btn-light ml-1" onClick={handleNext}>
                <i className="fa fa-angle-right" />
              </button>
            </div>
          </div>
          <div className="col-md-4 text-right d-none d-md-block">
            Monday, January 01, 2045
          </div>
        </div>
      </div>

      {/* Branding and Ad */}
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center text-lg-left">
            <Link to="/" className="navbar-brand">
              <h1 className="m-0 display-5 text-uppercase">
                <span className="text-danger">News</span>Room
              </h1>
            </Link>
          </div>
          <div className="col-lg-8 text-center text-lg-right">
            <img
              className="img-fluid"
              src={ads_700x70}
              alt="Ad banner"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid bg-light p-0">
        <nav className="navbar navbar-expand-lg navbar-light py-2 px-lg-5">
          <Link to="/" className="navbar-brand d-lg-none">
            <h1 className="m-0 display-5 text-uppercase">
              <span className="text-danger">News</span>Room
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/categories" className="nav-item nav-link">
                Categories
              </Link>
              <Link to="/single" className="nav-item nav-link">
                Single News
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdown}
                >
                  Dropdown
                </a>
                {isDropdownVisible && (
                  <div
                    className="dropdown-menu m-0"
                    style={{ display: "block" }}
                    onMouseLeave={closeDropdown}
                  >
                    <Link to="/item1" className="dropdown-item">
                      Menu Item 1
                    </Link>
                    <Link to="/item2" className="dropdown-item">
                      Menu Item 2
                    </Link>
                    <Link to="/item3" className="dropdown-item">
                      Menu Item 3
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
