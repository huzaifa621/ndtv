import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Citys from "../Components/Citys";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import Seacrch from "../Pages/Seacrch";

const MainRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Search" element={<Seacrch />} />
      </Routes>

      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default MainRoutes;
