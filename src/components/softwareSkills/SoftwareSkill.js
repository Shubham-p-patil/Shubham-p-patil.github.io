import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { ReactComponent as MatlabLogo } from "../../assets/images/matlab.svg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";

function logos({logoName}) {
  switch (logoName) {
    case "fab fa-react":
      return <DiReact />;
    case "fab fa-css3-alt":
      return <DiReact />;
    case "fab fa-sass":
      return <DiReact />;
    case "fab fa-js":
      return <DiReact />;
    case "fab fa-node":
      return <DiReact />;
    case "fab fa-swift":
      return <DiReact />;
    case "fab fa-npm":
      return <DiReact />;
    case "fab fa-fire":
      return <DiReact />;
    case "fab fa-python":
      return <DiReact />;
    case "fab fa-database":
      return <DiReact />;
    case "fab fa-aws":
      return <DiReact />;
    case "fab fa-js":
      return <DiReact />;
    case "fab fa-js":
      return <DiReact />;
    case "matlab":
      return <MatlabLogo/>;
    default:
      break;
  }
}
export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                {logos({logoName: skills.fontAwesomeClassname})}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        docker
      </div>
    </div>
  );
}
