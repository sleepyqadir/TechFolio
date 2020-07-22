import React, { Fragment } from "react";
import { Col } from "react-flexbox-grid";
import Flip from "react-reveal/Flip";
function BannerImage({ bannerSection }) {
  return (
    <Fragment>
      {" "}
      <Col lg={4} xs={12}>
        <Flip left>
          <div className="hero-image shape">
            {" "}
            <div
              className={
                bannerSection.bannerAvatar === "defaultAvatar.svg"
                  ? "wrap-default"
                  : "wrap-image"
              }
            >
              <img
                src={require(`../../../assets/imgs/${bannerSection.bannerAvatar}`)}
                alt=""
                className="hero-image_img"
              />
            </div>
          </div>
        </Flip>
      </Col>
      <Col xs={1} />
    </Fragment>
  );
}

export default BannerImage;
