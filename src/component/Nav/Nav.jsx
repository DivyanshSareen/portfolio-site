import React from "react";
const Nav = () => {
  const navOptions = ["About Me", "Timeline", "Projects", "Blog"];
  return (
    <nav>
      {navOptions.map((option) => (
        <div className="nav-option btn">{option}</div>
      ))}
    </nav>
  );
};

export default Nav;
