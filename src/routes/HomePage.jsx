import React from "react";
import AboutImage from "../assets/about.png";
import AboutMe from "../component/AboutMe/AboutMe";

const HomePage = () => {
  return (
    <main>
      <div className="about">
        <AboutMe />
        <img className="about-image" src={AboutImage} />
      </div>
    </main>
  );
};

export default HomePage;
