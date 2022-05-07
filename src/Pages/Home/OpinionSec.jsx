import React from "react";

const OpinionSec = () => {
  return (
    <div style={{ padding: "10px", background: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <div style={{ fontWeight: "550", color: "#414141" }}>Opinion</div>
        <div>More</div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ display: "flex", flex: "1", gap: "10px" }}>
          <div>
            <img
              style={{ borderRadius: "3px", width: "100px" }}
              src="https://c.ndtvimg.com/2022-05/can5t15_delhi-heatwave-reuters_120x90_02_May_22.jpg?downsize=100:75"
              alt=""
            />
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "550",
              lineHeight: "18px",
              color: "#2b2b2b"
            }}
          >
            Opinion: India's Heatwaves Are Testing The Limits Of Human Survival
          </div>
        </div>
        <div style={{ height: "80px", border: "1px solid lightgray" }}></div>
        <div style={{ display: "flex", flex: "1", gap: "10px" }}>
          <div>
            <img
              style={{ borderRadius: "3px", width: "100px" }}
              src="https://c.ndtvimg.com/2022-04/0fu6enr8_rahul-gandhi-pti_120x90_21_April_22.jpg?downsize=100:75"
              alt=""
            />
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "550",
              lineHeight: "18px",
              color: "#2b2b2b"
            }}
          >
            Opinion: Time For Rahul Gandhi To Do A Vajpayee
            <p style={{ color: "gray", margin: "0px", marginTop: "14px" }}>
              Ashutosh
            </p>
          </div>
        </div>
        <div style={{ height: "80px", border: "1px solid lightgray" }}></div>
        <div style={{ display: "flex", flex: "1", gap: "10px" }}>
          <div>
            <img
              style={{ borderRadius: "3px", width: "100px" }}
              src="https://c.ndtvimg.com/2022-05/qe7e6tl8_maharashtra-day_625x300_01_May_22.jpg?im=FaceCrop,algorithm=dnn,width=100,height=75"
              alt=""
            />
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "550",
              lineHeight: "18px",
              color: "#2b2b2b"
            }}
          >
            Opinion: This Maharashtra Day, We Stand At A Crossroads
            <p style={{ color: "gray", margin: "0px", marginTop: "14px" }}>
              Jayant Patil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionSec;
