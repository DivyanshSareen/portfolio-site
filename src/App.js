import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Nav from "./component/Nav/Nav";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Contact />
    </>
  );
};

export default App;
