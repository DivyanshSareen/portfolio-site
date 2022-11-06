import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars, Xmark } from "../../assets";

const Nav = () => {
  const location = useLocation();
  const data = [
    { id: 0, title: "About", path: "/", isSelected: true },
    { id: 2, title: "Projects", path: "/projects", isSelected: false },
    { id: 3, title: "Blog", path: "/blog", isSelected: false },
    { id: 1, title: "Skills", path: "/skills", isSelected: false },
  ];

  const [navOptions, setNavOptions] = useState(data);
  const [dropNav, setDropNav] = useState(false);

  useEffect(() => {
    setNavOptions((navOptions) =>
      navOptions.map((e) =>
        e.path === location.pathname
          ? { ...e, isSelected: true }
          : { ...e, isSelected: false }
      )
    );
    setDropNav(false);
  }, [location]);

  useEffect(() => {
    console.log(dropNav);
  }, [dropNav]);

  return (
    <>
      <nav>
        {navOptions.map((option) => (
          <Link
            key={option.id}
            className="nav-option btn"
            style={
              option.isSelected
                ? {
                    color: "var(--action-orange)",
                    backgroundColor: "white",
                    filter: "brightness(100%)",
                    display: "block",
                  }
                : {}
            }
            to={option.path}
          >
            {option.title}
          </Link>
        ))}
        <img
          onClick={() => {
            setDropNav((dropNav) => (dropNav ? false : true));
          }}
          className="nav-option nav-icon"
          width="30vw"
          src={dropNav ? Xmark : Bars}
        ></img>
      </nav>
      {dropNav && (
        <div className="dropdown-nav">
          {navOptions.map((option) => (
            <Link
              key={option.id}
              className="dropdown-nav--option btn"
              style={
                option.isSelected
                  ? {
                      color: "var(--action-orange)",
                      backgroundColor: "white",
                      filter: "brightness(100%)",
                    }
                  : {}
              }
              to={option.path}
            >
              {option.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
