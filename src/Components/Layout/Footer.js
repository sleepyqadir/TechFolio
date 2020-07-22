import React from "react";

import { Row, Col } from "react-flexbox-grid";
import babusoftLogo from "../../assets/imgs/babusoft.png";
import ayinQophLogo from "../../assets/imgs/ayin_qoph.png";

function Footer() {
  return (
    <footer>
      <div className="content">
        <Row center="xs" middle="xs">
          <Col xs={4}>
            <img src={ayinQophLogo} className="content_logo" alt="ayin_qoph"/>
            <img
              src={babusoftLogo}
              className="content_logo"
              alt="Babusoft"
              style={{ marginBottom: "30px" }}
            />
          </Col>
          <Col xs={8} className="techfolio_copyright">Techfolio ©2020 Design by –– Abdul Qadir</Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
