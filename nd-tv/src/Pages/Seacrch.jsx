import React, { useEffect, useState } from "react";
import styles from "../Components/navbar.module.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../db.json";

// console.log("data:", data);
const Seacrch = () => {
  const [dataSearch, setdataSearch] = useState([]);
  const { Search } = useParams();
  // const navigate = ()
  // console.log("Search:", Search);
  const navigate = useNavigate();
  const handleClick = (item) => {
    let arr = [];

    arr.push(item);

    localStorage.setItem("item", JSON.stringify(arr));
    navigate(`/SearchPage`);
  };
  useEffect(() => {
    for (let k in data) {
      if (k === Search) {
        setdataSearch(data[k]);
        // data = data[k];
      }
    }
  }, [Search]);

  return (
    <div>
      {dataSearch.map((item, index) => {
        return (
          <div key={index}>
            <div onClick={() => handleClick(item)} className={styles.dataDiv}>
              <div>
                <img src={item.urlToImage} alt="" />
              </div>

              <div className={styles.innerDiv}>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
      {Search}
    </div>
  );
};

export default Seacrch;
