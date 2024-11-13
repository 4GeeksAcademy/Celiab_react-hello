import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.name}{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              {props.firstSelector}
            </a>
            <a className="nav-link" href="#">
              {props.secondSelector}
            </a>
            <a className="nav-link" href="#">
              {props.thirdSelector}
            </a>
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              {props.fourthSelector}{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  name: PropType.string,
  firstSelector: PropType.string,
  secondSelector: PropType.string,
  thirdSelector: PropType.string,
  fourthSelector: PropType.string,
};

export default Navbar;
