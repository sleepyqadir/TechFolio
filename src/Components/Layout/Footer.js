import React from "react";

import { Row, Col } from "react-flexbox-grid";

function Footer() {
  return (
    <footer>
      <div className="content">
        <Row center="xs" middle="xs">
          <Col xs={8} className="techfolio_copyright">Techfolio ©2020 Design by –– Abdul Qadir</Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
