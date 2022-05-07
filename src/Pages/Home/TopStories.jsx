import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 13px;
  box-sizing: border-box;
  background: white;
  border-radius: 5px;
`;

const imgStyle = {
  borderRadius: "3px",
  width: "110px",
  height: "80px"
};

const parentDiv = {
  display: "flex",
  gap: "10px",
  margin: "10px 0px"
};

const childDivs = {
  display: "flex",
  alignItems: "center"
};

const paraStyle = {
  color: "#414141",
  margin: "0px",
  fontSize: "14px",
  fontWeight: "550",
  lineHeight: "18px"
};

const TopStories = () => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5bdfedf06bb14efb88aab3adeb930767"
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("ERROR!"));
  }, []);
  return (
    <MainDiv>
      <h3 style={{ margin: "0px" }}>Top Stories</h3>
      <div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-05/gsega3fc_assam-conman-police_120x90_05_May_22.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              Assam Cop Arrests Fiance After Learning That He's A Conman
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-03/rcgnc2j_apple_120x90_30_March_22.png?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              Apple Stops Accepting Card Payments For Apps, Subscriptions In
              India
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2021-09/d3kkjg6g_sanju-samson-bcciipl_625x300_22_September_21.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              'He Spoke With Owner And Groundsman In Same Way': Samson On India
              Legend
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-02/vdu9dou_ashok-gehlot_120x90_23_February_22.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              'If Amit Shah Has Courage...': What Ashok Gehlot Said On 'Riots In
              7 States'
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-05/jdfuu4lo_lic-new_120x90_05_May_22.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              LIC IPO Subscribed 97% So Far; Issue To Remain Open On Weekend: 10
              Points
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-03/0sklinlo_whatsapp-back-up_120x90_22_March_22.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              'I Regret It': Ex WhatsApp Executive On Facebook Deal
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2022-05/gqrlefa4_rishabh-pant_625x300_05_May_22.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              Virender Sehwag Urges Rishabh Pant To 'Play With A Bit Of
              Responsibility'
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2020-12/sg0u8dv8_union-minister-raosaheb-danve_120x90_09_December_20.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              'Wish To See A Brahmin As Maharashtra Chief Minister': Union
              Minister
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://i.ndtvimg.com/i/2018-04/coal-train-generic_240x180_61522727934.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              1,100 Train Trips Cancelled To Make Way For Coal As Power Crisis
              Worsens
            </p>
          </div>
        </div>
        <div style={parentDiv}>
          <div>
            <img
              style={imgStyle}
              src="https://c.ndtvimg.com/2021-03/rjjnemm_vaccine-generic-pixabay-240_240x180_03_March_21.jpg?downsize=105:79"
              alt=""
            />
          </div>
          <div style={childDivs}>
            <p style={paraStyle}>
              Coronavirus Vaccination Tracker Coronavirus Vaccination Tracker
            </p>
          </div>
        </div>
      </div>
    </MainDiv>
  );
};

export default TopStories;
