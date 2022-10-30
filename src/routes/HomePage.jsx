import React from "react";
import AboutImage from "../assets/about.png";

const HomePage = () => {
  return (
    <main>
      <div className="about">
        <div className="about-text">
          <p>
            Hello, I am Divyansh Sareen. A software developer from Delhi, India.
            I completed my Btech in Computer Science in June of this year and I
            am open for any web development jobs.
          </p>
          <div className="about-text--option btn">read more</div>
        </div>
        <div className="about-image"><img src={AboutImage} /></div>
      </div>
    </main>
  );
};

export default HomePage;
