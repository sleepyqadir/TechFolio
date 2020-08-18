/** @format */

import React, { useContext, Fragment } from "react";
import { Col, Row } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./skills.css";
import VisibilitySensor from "react-visibility-sensor";
import skillsIllustration from "../../assets/imgs/img-skills.png";
import coding from "../../assets/imgs/code-icon.svg";
import { skillsSection } from "../../techfolio";
import { ScrollContext } from "../../Context/scroll";
import { isMobile } from "react-device-detect";
import Heading from "../common/Heading";
function Skills() {
  const { scrollChange } = useContext(ScrollContext);
  const skillsSet = skillsSection.skillsSet.map((skill, i) => {
    return (
      <Col xs={2} key={i}>
        {" "}
        <i className={`${skill.fontAwesomeClassname} skill_img`}></i>{" "}
      </Col>
    );
  });
  const skillsTagLines = skillsSection.skillsTagLines.map((tagline, i) => {
    return (
      <h3 className="skills_section_skill" key={i}>
        <img draggable="false" className="emoji" alt="💠" src={coding}></img>
        {tagline}
      </h3>
    );
  });
  return (
    <Fragment>
      {isMobile && (
        <Heading heading={"Skills"} style={{ marginBottom: "60px" }} />
      )}
      <section className="section section3" id="skillsSection" name="skills">
        <div className="site-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                scrollChange("skills");
              }
            }}
          >
            <Row around="xs" middle="xs" center="xs" start="lg">
              <Col xs={12} lg={6}>
                <Flip left>
                  {" "}
                  <img src={skillsIllustration} alt="skills" />{" "}
                </Flip>
              </Col>
              <Col xs={12} lg={6}>
                <Fade bottom cascade>
                  <Row
                    around="xs"
                    middle="xs"
                    className="skills_section_skillsSets"
                  >
                    {" "}
                    {skillsSet}{" "}
                  </Row>
                  {skillsTagLines}
                </Fade>
              </Col>
            </Row>
          </VisibilitySensor>
        </div>
      </section>
    </Fragment>
  );
}

export default Skills;
