import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const data = [
    { id: 0, title: "About Me", path: "/", isSelected: true },
    { id: 2, title: "Projects", path: "/projects", isSelected: false },
    { id: 3, title: "Blog", path: "/blog", isSelected: false },
    { id: 1, title: "Skills", path: "/skills", isSelected: false },
  ];

  const [navOptions, setNavOptions] = useState(data);

  useEffect(() => {
    setNavOptions((navOptions) =>
      navOptions.map((e) =>
        e.path === location.pathname
          ? { ...e, isSelected: true }
          : { ...e, isSelected: false }
      )
    );
  }, [location]);

  return (
    <nav>
      {navOptions.map((option) => (
        <Link
          key={option.id}
          className="nav-option btn"
          style={
            option.isSelected
              ? { color: "var(--action-orange)", backgroundColor: "white",     filter: "brightness(100%)" }
              : {}
          }
          to={option.path}
        >
          {option.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
