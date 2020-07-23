import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
function Heading({ heading}) {
  return (
    <Row center="xs">
      <Col xs={8}>
        <div className="banner-content">
          <h1 style={{textShadow: "2px 2px #7f5af0"}}>
            {" "}
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
