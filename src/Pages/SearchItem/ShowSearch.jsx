import React from "react";

const ShowSearch = () => {
  let item = JSON.parse(localStorage.getItem("item"));

  console.log("item:", item);

  return (
    <>
      {item.map((item) => {
        return (
          <>
            <div style={{}}>
              <div
                style={{
                  width: "90%",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <h1 style={{ fontWeight: "800" }}>{item.title}</h1>
                <div style={{ color: "#666" }}>{item.content}</div>
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

                  wrap: "break-word",

                  width: "90%",
                  margin: "auto",
                  marginTop: "55px",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgb(0 0 0 / 80%)",
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
