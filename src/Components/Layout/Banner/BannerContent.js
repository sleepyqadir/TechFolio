import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
import { Link as ScrollTo } from "react-scroll";
import { isMobile } from "react-device-detect";
function BannerContent({ bannerSection }) {
  return (
    <Col lg={5} xs={12}>
      <div className="banner-content">
        <h1>
          {" "}
          <Fade bottom big cascade>
            {bannerSection.bannerHeading}
          </Fade>
        </h1>

        <Fade bottom cascade>
          <p>{bannerSection.bannerTagLine}</p>
        </Fade>
        <div className="banner-btns">
          <ScrollTo to="contact" spy={true} smooth={true} duration={1000}>
            <button className="btn btn-1">CONTACT</button>
          </ScrollTo>
          <a
            href={bannerSection.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-1"
          >
            RESUME
          </a>
        </div>
      </div>
      <Row center="xs">
        <Col xs={2}>
          {isMobile ? (
            <div className="icon hidden-lg" onClick={() => {}}>
              <div className="icon-wrapper">
                <div className="hand-icon">
                  <div className="hand">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="icon hidden-sm hidden-md" onClick={() => {}}>
              <div className="icon-wrapper">
                <div className="mouse-icon">
                  <div className="mouse"></div>
                  <span className="arrow arrow-01"></span>
                  <span className="arrow arrow-02"></span>
                  <span className="arrow arrow-03"></span>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Col>
  );
}

export default BannerContent;
