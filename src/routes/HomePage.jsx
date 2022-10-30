import React from "react";
import AboutImage from "../assets/about.png";
import AboutMe from "../component/AboutMe/AboutMe";

const HomePage = () => {
  return (
    <main>
      <div className="about">
        <AboutMe />
        <div className="about-image">
          <img src={AboutImage} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
