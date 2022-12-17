import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const twitter = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>;
const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>;
const linkedin = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
const github = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
const telegram = <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>;

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer shadow-lg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                <span className="logo">CLEAN-CSS </span> is a free and open
                source platform which can be used to remove unused css selectors
                from any stylesheet (css file).
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Other Projects</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/biruk-kassaw/stay-fit">
                    Stay fit
                  </a>
                </li>
                <li>
                  <a href="https://github.com/biruk-kassaw/ethio-tour">
                    Ethio-Tour
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a
                  href="https://github.com/biruk-kassaw"
                  className="m-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Biruk
                </a>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <span>made with ❤️ by Biruk </span>
                  <a
                    className="facebook"
                    target="_blank"
                    href="https://github.com/biruk-kassaw"
                    rel="noreferrer"
                  >
                    {github}
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    {twitter}
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://t.me/Bruke23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {telegram}
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/biruk-k-2b79ab229/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
