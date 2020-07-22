import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Navbar from "./Navbar/Navbar";
import Logo from "../common/Logo";
import { socialNetworks, app } from "../../techfolio";
import AppHelmet from "../common/AppHelmet";
function Header() {
  return (
    <header className="site-header">
      <AppHelmet app={app} />
      <div className="site-container">
        <Row start="lg" end="xs">
          <Logo />
          <Col lg={8} xs={8}>
            <Row around="lg" end="xs">
              <Col lg={9} xs={4}></Col>
              <Col lg={3} xs={8}>
                {/* //TODO : icons scss format */}
                <ul className="social-networks spin-icon">
                  <li>
                    <a
                      href={socialNetworks.github}
                      className="icon-github social-network-link"
                    >
                      github
                    </a>
                  </li>
                  <Navbar />
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </header>
  );
}
export default Header;
