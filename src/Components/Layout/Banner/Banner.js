import React, { useContext, Fragment } from "react";
import { Row} from "react-flexbox-grid";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../../Context/scroll";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { isMobile } from "react-device-detect";
import { bannerSection } from "../../../techfolio";
function Banner() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <section className="section section1" id="bannerSection" name="home">
      <div className="site-container">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              scrollChange("home");
            }
          }}
        >
          <Row around="xs" middle="xs" center="xs">
            {!isMobile ? (
              <Fragment>
                {" "}
                <BannerContent bannerSection={bannerSection} />
                <BannerImage bannerSection={bannerSection} />{" "}
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <BannerImage bannerSection={bannerSection} />
                <BannerContent bannerSection={bannerSection} />{" "}
              </Fragment>
            )}
          </Row>
        </VisibilitySensor>
      </div>
    </section>
  );
}
export default Banner;
