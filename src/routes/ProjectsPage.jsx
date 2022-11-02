import React from "react";

const ProjectsPage = () => {
  const projects = [
    { id: 1, name: "E-commerce App", url: "https://gardenshop.netlify.app/", gitUrl: "https://github.com/DivyanshSareen/plant-shop", tech: [] },
    { id: 2, name: "Video Library App", url: "", gitUrl: "https://github.com/DivyanshSareen/shuffle-video-player", tech: [] },
    { id: 3, name: "Social Media App", url: "", gitUrl: "https://github.com/DivyanshSareen/tweeter", tech: [] },
    { id: 4, name: "CSS Component Library", url: "", gitUrl: "https://github.com/DivyanshSareen/PeaceUI", tech: [] },
    { id: 5, name: "Webpack Starter", url: "", gitUrl: "https://github.com/DivyanshSareen/web-starter-pack", tech: [] },
  ];
  return (
    <section className="project-grid">
      {projects.map((project) => (
        <a href={project.url} target="_blank">
          <div key={project.id} className="project-card">
            <div className="project-title">{project.name}</div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default ProjectsPage;
