import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const data = [
    { id: 0, title: "About Me", path: "/", isSelected: true },
    { id: 2, title: "Projects", path: "projects", isSelected: false },
    { id: 3, title: "Blog", path: "/blog", isSelected: false },
    { id: 1, title: "Skills", path: "/skills", isSelected: false },
  ];
  const [navOptions, setNavOptions] = useState(data);
  const clickHandler = (options) => {
    const id = option.target.dataset.id;
    setNavOptions(navOptions.map(e => e.id === parseInt(id) ? {...e, isSelected:true} : {...e, isSelected:false}))
  }
  return (
    <nav>
      {navOptions.map((option) => (
        <Link onClick={(option)=>clickHandler(option)} key={option.id} className="nav-option btn" 
        style={option.isSelected ? {color: "orange", backgroundColor: "white"} : {}} 
        to={option.path} data-id={option.id}>
          {option.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
