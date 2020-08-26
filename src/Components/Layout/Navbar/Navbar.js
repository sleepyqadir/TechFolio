/** @format */

import React, { useState, Fragment } from "react";
import { Link as ScrollTo } from "react-scroll";
function Navbar() {
  const [open, toggleOpen] = useState(false);
  return (
    <Fragment>
      <li>
        <div
          className="ham"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          <i className="fas fa-bars hamBurger"></i>
        </div>
      </li>
      <div className={`${open && "open"} overlay`} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <ScrollTo
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Home</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>About</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Skills</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="openSources"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Education</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Project</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="experiences"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Experience</p>
              </ScrollTo>
            </li>
            <li>
              <ScrollTo
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => {
                  toggleOpen(!open);
                }}
              >
                <p>Contact</p>
              </ScrollTo>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
