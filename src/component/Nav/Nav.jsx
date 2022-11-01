import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navOptions = [
    { id: 0, title: "About Me", path: "/" },
    { id: 2, title: "Projects", path: "projects" },
    { id: 3, title: "Blog", path: "/blog" },
    { id: 1, title: "Skills", path: "/skills" },
  ];
  return (
    <nav>
      {navOptions.map((option) => (
        <Link key={option.id} className="nav-option btn" to={option.path}>
          {option.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
