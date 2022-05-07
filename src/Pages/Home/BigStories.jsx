import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 280px;
  background: white;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const BigStories = () => {
  return (
    <MainDiv>
      <div style={{ padding: "13px" }}>
        <h3 style={{ margin: "0px" }}>Big Story</h3>
      </div>
      <div>
        <img
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "2px"
          }}
          src="https://i.ndtvimg.com/i/2018-02/heatwave_650x400_61518353772.jpg?downsize=340:209"
          alt=""
        />
      </div>
      <div style={{ padding: "13px" }}>
        <p
          style={{
            fontSize: "15.5px",
            lineHeight: "20px",
            fontWeight: "550",
            margin: "0px",
            color: "#585858"
          }}
        >
          PM's Important Meet On Heatwave Today After Returning From Europe:
          Sources
        </p>
      </div>
    </MainDiv>
  );
};

export default BigStories;
