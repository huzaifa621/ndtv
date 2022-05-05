import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default MainRoutes;
