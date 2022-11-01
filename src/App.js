import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Nav from "./component/Nav/Nav";
import Contact from "./component/Contact/Contact";
import SkillsPage from "./routes/SkillsPage";
import ProjectsPage from "./routes/ProjectsPage";
import BlogPage from "./routes/BlogPage";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Contact />
    </>
  );
};

export default App;
