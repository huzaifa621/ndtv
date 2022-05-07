import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "./db.json";

const Seacrch = () => {
  const [dataSearch, setdataSearch] = useState([]);
  const { Search } = useParams();
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
                <div style={{ marginBottom: "30px" }}>{item.title}</div>
                <div style={{ color: "#717171" }}>{item.content}</div>
                <div
                  style={{
                    width: "fit-content",
                    marginTop: "7px",
                    color: "#999",
                    display: "flex"
                  }}
                >
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src="		https://www.ndtv.com/static/images/domain_favicons/www-ndtv-com.png?v1"
                    alt=""
                  />
                  <p
                    style={{
                      paddingLeft: "10px"
                    }}
                  >
                    www.ndtv.com
                  </p>
                </div>
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
