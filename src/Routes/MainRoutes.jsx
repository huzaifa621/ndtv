import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home/Home";
import Letest from "../Pages/letest/Letest";
import Data1 from "../Pages/india/Data1";
import NotFound from "../Pages/NotFound/NotFound";
import Seacrch from "../Pages/Search/Seacrch";
import ShowSearch from "../Pages/SearchItem/ShowSearch";

const MainRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Letest />} />
        <Route path="/india" element={<Data1 />} />

        <Route path="/Search/:Search" element={<Seacrch />} />
        <Route path="/SearchPage" element={<ShowSearch />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default MainRoutes;
