import React from "react";
import styled from "styled-components";
import BigStories from "./BigStories";
import TopStories from "./TopStories";
import CenterNews from "./CenterNews";
import OpinionSec from "./OpinionSec";
import Trending from "./Trending";
import Ipl from "./Ipl";
import Koo from "./Koo";

const Container = styled.div`
  width: 93%;
  margin-top: 50px;
  margin-left: 3.5%;
  display: flex;
  gap: 2%;
  margin-bottom: 50px;
`;

const Child1 = styled.div`
  flex: 1.16;
`;

const Child2 = styled.div`
  flex: 2;
`;

const Child3 = styled.div`
  flex: 1;
  padding-top: 125px;
  box-sizing: border-box;
`;

const Opinion = styled.div`
  border-radius: "3px";
`;

const Home = () => {
  return (
    <>
      <Container>
        <div style={{ flex: "3.3" }}>
          <div style={{ display: "flex", gap: "2.6%" }}>
            <Child1>
              <BigStories />
              <TopStories />
            </Child1>
            <Child2>
              <CenterNews />
            </Child2>
          </div>
          <Opinion>
            <OpinionSec />
          </Opinion>
        </div>
        <Child3>
          <Koo />
          <div>
            <img
              style={{ width: "100%", borderRadius: "3px", height: "100px" }}
              src="https://drop.ndtv.com/images/hpage/300x100.png"
              alt=""
            />
          </div>
        </Child3>
      </Container>

      <Ipl />
      <Trending />

      <Container>
        <div style={{ flex: "3.3" }}>
          <div style={{ display: "flex", gap: "2.6%" }}>
            <Child1>
              <BigStories />
              <TopStories />
            </Child1>
            <Child2>
              <CenterNews />
            </Child2>
          </div>
          <Opinion>
            <OpinionSec />
          </Opinion>
        </div>
        <Child3>
          <Koo />
          <div>
            <img
              style={{ width: "100%", borderRadius: "3px", height: "100px" }}
              src="https://drop.ndtv.com/images/hpage/300x100.png"
              alt=""
            />
          </div>
        </Child3>
      </Container>

      <Ipl />
      <Trending />

      <Container>
        <div style={{ flex: "3.3" }}>
          <div style={{ display: "flex", gap: "2.6%" }}>
            <Child1>
              <BigStories />
              <TopStories />
            </Child1>
            <Child2>
              <CenterNews />
            </Child2>
          </div>
          <Opinion>
            <OpinionSec />
          </Opinion>
        </div>
        <Child3>
          <Koo />
          <div>
            <img
              style={{ width: "100%", borderRadius: "3px", height: "100px" }}
              src="https://drop.ndtv.com/images/hpage/300x100.png"
              alt=""
            />
          </div>
        </Child3>
      </Container>

      <Ipl />
      <Trending />
    </>
  );
};

export default Home;
