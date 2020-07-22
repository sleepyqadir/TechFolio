import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
function Heading({ heading ,style}) {
  return (
    <Row center="xs">
      <Col xs={8}>
        <div className="brand">
          <h1 className="logo logo--stroke logo--shadow">
            <Fade bottom big cascade>
              {heading}
            </Fade>
          </h1>
        </div>
      </Col>
    </Row>
  );
}

export default Heading;
