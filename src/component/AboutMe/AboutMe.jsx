import React, { useState } from "react";
import data from "./data";

const AboutMe = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const handleReadMore = () => {
    setDataIndex((dataIndex) => (dataIndex < 2 ? dataIndex + 1 : dataIndex));
  };
  return (
    <div className="about-text">
      <div className="about-title">
        Hello, I am <span id="my-name">Divyansh Sareen.</span>
      </div>
      {data[dataIndex].text.map((text, index) => (
        <div key={index} className="about-text--paragraph">
          {text}
        </div>
      ))}
      {dataIndex < 2 && (
        <div className="about-text--option btn" onClick={handleReadMore}>
          read more
        </div>
      )}
    </div>
  );
};

export default AboutMe;
