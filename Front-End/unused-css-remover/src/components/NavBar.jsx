import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar shadow-sm fixed-top navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container">
            <a className="navbar-brand logo" href="#">
              CLEAN CSS
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
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
                <a className="nav-link" href="#">
                  CONTRIBUTE
                </a>
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
