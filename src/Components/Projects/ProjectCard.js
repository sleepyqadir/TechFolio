import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    >
      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project.projectName}</div>
            <div className="card-bio">{project.projectBio}</div>
          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default ProjectCard;
