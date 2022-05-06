import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Citys from "../Components/Citys";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import Seacrch from "../Pages/Seacrch";
import ShowSearch from "../Pages/ShowSearch";

const MainRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Search" element={<Seacrch />} />
        <Route path="/SearchPage" element={<ShowSearch />} />
      </Routes>

      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default MainRoutes;
