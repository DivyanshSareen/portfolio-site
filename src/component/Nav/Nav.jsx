import React from "react";
const Nav = () => {
  const navOptions = [
    { id: 0, title: "About Me", url: "" },
    { id: 1, title: "Timeline", url: "" },
    { id: 2, title: "Projects", url: "" },
    { id: 3, title: "Blog", url: "" },
  ];
  return (
    <nav>
      {navOptions.map((option) => (
        <div key={option.id} className="nav-option btn">
          {option.title}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
