import React, { useState } from "react";
import Show from "./Show";

const Search = () => {
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState([]);
  const handleSearch = (e) => {
    setsearch(e.target.value);
    // console.log(e);
  };

  const getData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&from=2022-05-05&sortBy=popularity?country=in&apiKey=84dbede01891444fa2b85aeded8f934b`
    );
    let data = await response.json();

    setsearchData(data.articles);
    console.log(searchData);
  };

  const handle = () => {
    getData();
  };
  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
      <button
        onClick={() => {
          handle();
        }}
      >
        Go
      </button>
      <Show data={searchData} />
    </div>
  );
};

export default Search;
