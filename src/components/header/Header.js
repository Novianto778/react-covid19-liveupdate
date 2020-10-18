import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={window.location.origin + '/img/logo.png'} alt="covid logo" width="54" height="54" />
            <span className="ml-2">COVID-19</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Results
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Exterior
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Interior
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
