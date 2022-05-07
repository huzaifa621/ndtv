import React from "react";

const Ipl = () => {
  return (
    <div
      style={{
        width: "93%",
        margin: "auto",
        height: "375px",
        marginBottom: "50px"
      }}
    >
      <div
        style={{
          fontWeight: "550",
          background: "#2b2b2b",
          color: "white",
          padding: "5px",
          width: "fit-content",
          borderRadius: "3px"
        }}
      >
        IPL 2022
      </div>

      <div
        style={{
          display: "flex",
          padding: "20px 0px",
          background: "white"
        }}
      >
        <div
          style={{
            flex: "1.4",
            padding: "0px 20px 0px 20px"
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{ fontSize: "17px", color: "#079035", fontWeight: "550" }}
            >
              NEWS
            </div>
            <div
              style={{ fontSize: "17px", color: "#3f3f3f", fontWeight: "550" }}
            >
              PHOTOS
            </div>
          </div>
          <hr style={{ border: "1px solid lightgray", marginBottom: "15px" }} />
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: "1" }}>
              <div>
                <img
                  style={{ height: "207px", borderRadius: "3px" }}
                  src="https://c.ndtvimg.com/2022-03/4b24gmpo_sunil-gavaskar_625x300_08_March_22.jpg?downsize=335:207"
                  alt=""
                />
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "16px",
                  fontWeight: "550",
                  color: "#2b2b2b",
                  lineHeight: "24px"
                }}
              >
                "Won't Be The Same": Gavaskar On Hardik vs MI Compared To Warner
                vs SRH
              </div>
            </div>
            <div style={{ flex: "1", color: "#3f3f3f" }}>
              <div style={{ display: "flex", gap: "13px" }}>
                <div>
                  <img
                    style={{
                      borderRadius: "3px",
                      height: "57px",
                      width: "75px"
                    }}
                    src="https://c.ndtvimg.com/2022-04/uoir62c_virat-kohli-bcciipl_625x300_27_April_22.jpg?downsize=75:57"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px"
                  }}
                >
                  <div>
                    "All About Intent": Daniel Vettori On Virat Kohli's 30-Run
                    Knock vs CSK
                  </div>
                </div>
              </div>
              <hr
                style={{
                  border: "1px solid lightgray",
                  width: "35%",
                  margin: "10px 0px"
                }}
              />

              <div style={{ display: "flex", gap: "13px" }}>
                <div>
                  <img
                    style={{
                      borderRadius: "3px",
                      height: "57px",
                      width: "75px"
                    }}
                    src="https://c.ndtvimg.com/2022-05/kcrj5pt_david-warner_625x300_05_May_22.jpg?downsize=75:57"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px"
                  }}
                >
                  <div>
                    IPL 2022: Here's What Pant Said About Warner's 92-Run Knock
                    Against SRH
                  </div>
                </div>
              </div>

              <hr
                style={{
                  border: "1px solid lightgray",
                  width: "35%",
                  margin: "10px 0px"
                }}
              />

              <div style={{ display: "flex", gap: "13px" }}>
                <div>
                  <img
                    style={{
                      borderRadius: "3px",
                      height: "57px",
                      width: "75px"
                    }}
                    src="https://c.ndtvimg.com/2022-05/8mkqsve_delhi-capitals-bcciipl_625x300_06_May_22.jpg?im=FaceCrop,algorithm=dnn,width=75,height=57"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px"
                  }}
                >
                  <div>
                    IPL 2022 Points Table Update, Latest Orange Cap, Purple Cap
                    Lists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid lightgray", height: "310px" }}></div>
        <div style={{ flex: "1", padding: "0px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{ color: "#079035", fontSize: "17px", fontWeight: "550" }}
            >
              SCORES
            </div>
            <div
              style={{ color: "#414141", fontSize: "17px", fontWeight: "550" }}
            >
              SCHEDULE
            </div>
            <div
              style={{ color: "#414141", fontSize: "17px", fontWeight: "550" }}
            >
              POINTS TABLE
            </div>
            <div
              style={{ color: "#414141", fontSize: "17px", fontWeight: "550" }}
            >
              RESULTS
            </div>
          </div>
          <hr style={{ border: "1px solid lightgray", marginBottom: "15px" }} />
          <div style={{ textAlign: "center" }}>No Matches In Progress</div>
        </div>
      </div>
    </div>
  );
};

export default Ipl;
