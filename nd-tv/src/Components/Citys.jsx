import React from "react";
import styles from "./navbar.module.css";

const Citys = ({ data }) => {
  console.log("data:", data);

  const handleClick = (item) => {
    console.log("item:", item);
  };
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div onClick={() => handleClick(item)} className={styles.dataDiv}>
              <div>
                <img src={item.urlToImage} alt="" />
              </div>

              <div className={styles.innerDiv}>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Citys;
