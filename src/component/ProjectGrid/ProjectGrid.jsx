import React from "react";

const ProjectGrid = () => {
  const projects = [
    {
      id: 5,
      name: "Webpack Starter",
      desc: "A web development starter kit based on webpack and React. Dev-dependencies include babel, eslint, prettier, husky, commitlint etc.",
      url: "https://www.npmjs.com/package/@divyanshsareen/web-starter-pack",
      gitUrl: "https://github.com/DivyanshSareen/web-starter-pack",
      tech: [],
    },
    {
      id: 1,
      name: "E-commerce App",
      desc: "Features: Product Listing, Filter, Wishlist, Cart, Billing and Payment",
      url: "https://gardenshop.netlify.app/",
      gitUrl: "https://github.com/DivyanshSareen/plant-shop",
      tech: [],
    },
    {
      id: 4,
      name: "CSS Library",
      desc: "A pure CSS based component Library with features like Typography, Buttons, Navbar, Modal, List, Form etc.",
      url: "https://peaceui.netlify.app/",
      gitUrl: "https://github.com/DivyanshSareen/PeaceUI",
      tech: [],
    },
    {
      id: 2,
      name: "Video Library App",
      desc: "Features: Video Page, Like, Watchlater, History, Playlist Management",
      url: "https://shuffleplayer.netlify.app/",
      gitUrl: "https://github.com/DivyanshSareen/shuffle-video-player",
      tech: [],
    },
    {
      id: 3,
      name: "Social Media App",
      desc: "Features: Create/Update/Delete Post, Like, Comment & Bookmark Post, User Profile, Follow/Unfollow users",
      url: "https://tweeterweb.netlify.app/",
      gitUrl: "https://github.com/DivyanshSareen/tweeter",
      tech: [],
    },
    {
      id: 6,
      name: "Quiz App",
      desc: "React based SPA where you can enjoy fun quizzes on your favourite topics. Currently we have quizzes on The Office and Haikyu!",
      url: "https://quizmasterweb.netlify.app/",
      gitUrl: "https://github.com/DivyanshSareen/master-quiz",
      tech: [],
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-title">{project.name}</div>
          <div className="project-desc">{project.desc}</div>
          <div className="project-links">
            <a href={project.gitUrl} target="_blank">
              <div className="btn">Code</div>
            </a>
            <a href={project.url} target="_blank">
              <div className="btn">Demo</div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectGrid;
