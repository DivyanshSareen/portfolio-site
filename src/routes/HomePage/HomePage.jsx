import React, { useState } from "react";
import AboutImage from "../../assets/about.png";
import data from "./data";

const HomePage = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const handleReadMore = () => {
    setDataIndex((dataIndex) => (dataIndex < 2 ? dataIndex + 1 : dataIndex));
  };
  return (
    <main>
      <div className="about">
        <div className="about-text">
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
        <div className="about-image">
          <img src={AboutImage} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
