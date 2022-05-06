import React from "react";

const ShowSearch = () => {
  let item = JSON.parse(localStorage.getItem("item"));
  //  localStorage.getItem('bgcolor');
  console.log("item:", item);

  return (
    <>
      {item.map((item) => {
        return (
          <>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1>{item.title}</h1>
                <div>{item.content}</div>
              </div>
              <div>
                <img
                  style={{
                    margin: "auto",
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "35px",
                  }}
                  src={item.urlToImage}
                  alt=""
                />
              </div>
              <div
                style={{
                  lineHeight: "30px",
                  fontWeight: "600",
                  fontSize: "17px",
                  wrap: "break-word",
                  marginTop: "55px",
                }}
              >
                {item.description}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ShowSearch;
