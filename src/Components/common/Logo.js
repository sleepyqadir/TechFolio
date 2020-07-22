import React from "react";
import { Col } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
import { bannerSection } from "../../techfolio";
const logo = (
  <Fade left big cascade>
    {bannerSection.username}
  </Fade>
);
function Logo() {
  return (
    <Col xs={4}>
      <div className="brand">
        <h1 className="logo logo--stroke logo--shadow">{logo}</h1>
      </div>
    </Col>
  );
}

export default Logo;
