import React, { useEffect, useState } from "react";

const Koo = () => {
  return (
    <div
      style={{
        borderRadius: "3px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        marginBottom: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          paddingBottom: "0px",
          background: "#f1f1f1",
          borderRadius: "3px"
        }}
      >
        <div style={{ fontWeight: "550", fontSize: "15px" }}>
          TRENDING ON KOO
        </div>
        <div style={{ height: "25px" }}>
          <img
            style={{
              width: "38px",
              height: "38px",
              objectFit: "cover",
              borderRadius: "50%",
              marginTop: "-20px",
              border: "2px solid #f1f1f1"
            }}
            src="https://img.jagranjosh.com/images/2021/May/2752021/Koo-app-raises-$30-million-funding-led-by-Tiger-Global-amid-Twitter-ban-row.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          padding: "0px 10px",
          background: "white",
          height: "270px",
          overflow: "scroll"
        }}
      >
        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/5517220/f887fc85-4e3d-43ef-8347-4e15eac23faavoke.jpg?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @mohfw_india
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                5m
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              #EndTheStigma #TB can happen to anyone! The love and support
              received from the family and the society will help to over...
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/d470ee16-68b9-4578-9ee8-dab96f1ef646voke.jpg?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @PIB_India
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                10m
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              Union Minister Raj Kumar Singh reviewed the status of import of
              coal for blending in the thermal power plants with the s...
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/9140193/profile1633069026694spc2vl.png?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @AmritMahotsav
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                40m
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              Everyone's favorite podcast is here 'cause we've got the riveting
              stories on the go. Where are you? Tune in to 'Zara Ya...
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/4231d077-e110-4367-96da-c3fa30453bd5voke.jpg?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @himantabiswa
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                2h
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              The progenitor of Advaita Vedānta, Adi Guru Shankaracharya ji
              infused new life into the ancient school of Hindu darśanam...
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/2630278/f56235de-75c9-4f72-9335-c2af0a3ae745voke.jpg?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @chouhanshivraj
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                3h
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              #Thoughtoftheday #FridayThoughts #FridayMotivation
              #GauranshiSharma #MadhyaPradesh
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/img62.2021/2/10/img62_1612926431?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @RailMinIndia
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                3h
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              NMG Rake : Faster, Safer & Reliable Bulk Carrier Railways offers
              swift transportation of automobiles through NMG (New M...
            </p>
          </div>
        </div>
        <hr style={{ margin: "0px", border: "1px solid lightgray" }} />

        <div style={{ display: "flex", gap: "4%", padding: "10px 0px" }}>
          <div
            style={{
              height: "70px",
              flex: "1.2",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              style={{
                marginTop: "15px",
                width: "100%",
                height: "100%"
              }}
              src="https://images.kooapp.com/transcode_input/a4b0efa5-e90d-45a2-bcf4-baae08d41a58voke.jpg?tr=n-dp_small"
              alt=""
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <div style={{ fontWeight: "550", fontSize: "13px" }}>
                @kiren.rijiju
              </div>
              <div
                style={{
                  fontWeight: "550",
                  fontSize: "13px",
                  color: "#9e9e9e"
                }}
              >
                3h
              </div>
            </div>

            <p style={{ margin: "0px", fontSize: "12px", color: "gray" }}>
              Attended public grievances during Sahyog Programme at BJP India
              Headquarter in New Delhi. #BJPSahyog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Koo;
