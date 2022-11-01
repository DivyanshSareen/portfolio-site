import React from "react";
import {
  Css3,
  Figma,
  Git,
  Html,
  Javascript,
  Postman,
  Netlify,
  Python,
  ReactIcon,
  Redux,
} from "../../assets/index";

const TechnologyGrid = () => {
  const technologyList = [
    { id: 0, name: "CSS", icon: Css3 },
    { id: 1, name: "HTML", icon: Html },
    { id: 2, name: "JavaScript", icon: Javascript },
    { id: 3, name: "React", icon: ReactIcon },
    { id: 4, name: "Redux", icon: Redux },
    { id: 5, name: "Postman", icon: Postman },
    { id: 6, name: "Python", icon: Python },
    { id: 7, name: "Figma", icon: Figma },
    { id: 8, name: "Git/GitHub", icon: Git },
    { id: 9, name: "Netlify", icon: Netlify },
  ];

  return (
    <>
      {" "}
      {technologyList.map((tech) => (
        <div key={tech.id} className="technology-icon">
          <img src={tech.icon}></img>
          <h4 className="technology-title"> {tech.name} </h4>
        </div>
      ))}
    </>
  );
};

export default TechnologyGrid;
