/** @format */

import React, { useState, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { projectsSection } from "../../techfolio";
import { Row } from "react-flexbox-grid";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";
function Projects() {
  const projects = projectsSection.projects.map((project, i) => {
    return <ProjectCard project={project} key={i} />;
  });
  const initialValue = projects.length > 2 ? 2 : projects.length;
  const [view, setView] = useState(initialValue);

  return (
    <Fragment>
      {isMobile && (
        <Heading heading={"Projects"} style={{ marginBottom: "30px" }} />
      )}
      <section className="section section5" name="projects">
        <div className="site-container">
          <Fade bottom>
            <div className="project-cards">{projects.slice(0, view)}</div>
            <Row around="xs">
              <div className="banner-content">
                <div className="banner-btns">
                  {projects.length > view ? (
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        setView(projects.length);
                      }}
                    >
                      View more
                    </button>
                  ) : projects.length < view ? (
                    ""
                  ) : (
                    <button
                      className="btn btn-1"
                      onClick={() => {
                        setView(initialValue);
                      }}
                    >
                      View less
                    </button>
                  )}{" "}
                </div>
              </div>
            </Row>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Projects;
