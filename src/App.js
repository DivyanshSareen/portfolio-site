import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Nav from "./component/Nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
