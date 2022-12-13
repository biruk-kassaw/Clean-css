import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div class="container">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a class="nav-link" href="#">
                  Features
                </a>
                <a class="nav-link" href="#">
                  Pricing
                </a>
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
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
