/** @format */

import React, { Fragment } from "react";
import ExperienceCard from "./ExperienceCard";
import Fade from "react-reveal/Fade";
import "./experience.css";
import { experienceSection } from "../../techfolio";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";

function Experience() {
  const experiences = experienceSection.experiences.map((experience, i) => {
    return <ExperienceCard experience={experience} key={i} />;
  });
  return (
    <Fragment>
      {isMobile && <Heading heading={"Experience"} />}
      <section
        className="section section6"
        id="experiencesSection"
        name="experiences"
      >
        <div>
          <Fade bottom>
            <div className="container experience-row-animation">
              <div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="true"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1542873226451 vc_row-has-fill experience-row-animation"
                  style={{
                    left: "-11.2px",
                    boxSizing: "border-box",
                    paddingLeft: "11.2px",
                    paddingRight: "10.8px",
                    position: "relative",
                  }}
                >
                  <div className="experience_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div className="experience_spacing">
                          <div
                            className="spacing_size spacing_size-initial"
                            style={{ height: "30px" }}
                          ></div>
                        </div>
                        <div className="experience_time_line_vertical appear_anim">
                          {experiences}
                        </div>
                        <div
                          id="seofy_spacer_5cf90ca8190c4"
                          className="experience_spacing responsive_active"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Experience;
