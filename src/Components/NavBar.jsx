import React, { useState } from "react";
import styled from "styled-components";
import styles from "./navbar.module.css";

import ndtv from "../Assets/ndtv.png";
import more from "../Assets/more.png";

import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import koo from "../Assets/koo.png";
import bell from "../Assets/bell.png";
import smartWatch from "../Assets/smartWatch.png";
import search from "../Assets/search.png";
import { useNavigate } from "react-router-dom";

const sticky = {
  margin: "auto",
  position: "-webkit-sticky",
  position: "sticky",
  top: "0",
  padding: "10px 35px",
  background: "#3e3e3e",
  display: "flex",
  alignItems: "center"
};

const upperDiv = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 130px",
  background: "#3e3e3e"
};

const UpperDivChilds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 5px;
  font-size: 10px;
  border-radius: 4px;
  color: #b5b5b5;
  cursor: pointer;
`;

const StickyDivChilds = styled.div`
  font-size: 15px;
  color: white;
  font-weight: 550;
  margin: 0px 11px;
  cursor: pointer;
`;

const MoreSticky = {
  margin: "auto",
  position: "-webkit-sticky",
  position: "sticky",
  top: "50px",
  padding: "0px 0px 10px 158px",
  background: "#3e3e3e",
  display: "flex",
  alignItems: "center"
};

const AfterMoreIcon = styled.div`
  margin: 0px 8px;
  cursor: pointer;
`;

const AfterMoreIconImage = styled.img`
  margin-top: 5px;
  width: 23px;
`;

const SearchDiv = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  width: fit-content;
  padding: 10px 30px 10px 10px;
  margin-left: 72%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #3e3e3e;
`;

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const handleMore = () => {
    setShow(show ? false : true);
  };

  const handleSearchShow = () => {
    setSearchShow(searchShow ? false : true);
  };
  const handleSearch = () => {
    navigate(`/Search/${searchValue}`);
  };

  return (
    <>
      <div style={upperDiv}>
        <UpperDivChilds
          onClick={() => navigate("/")}
          className={styles.upperChildHover}
        >
          NDTV
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/hindi")}
          className={styles.upperChildHover}
        >
          हिन्दी
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/business")}
          className={styles.upperChildHover}
        >
          BUSINESS
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/movies")}
          className={styles.upperChildHover}
        >
          MOVIES
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/cricket")}
          className={styles.upperChildHover}
        >
          CRICKET
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/tech")}
          className={styles.upperChildHover}
        >
          TECH
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/food")}
          className={styles.upperChildHover}
        >
          FOOD
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/crypto")}
          className={styles.upperChildHover}
        >
          CRYPTO
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/webStories")}
          className={styles.upperChildHover}
        >
          WEB STORIES
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/education")}
          className={styles.upperChildHover}
        >
          EDUCATION
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/auto")}
          className={styles.upperChildHover}
        >
          AUTO
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/swasth")}
          className={styles.upperChildHover}
        >
          SWASTH
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/lifestyle")}
          className={styles.upperChildHover}
        >
          LIFESTYLE
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/health")}
          className={styles.upperChildHover}
        >
          HEALTH
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/shopping")}
          className={styles.upperChildHover}
        >
          SHOPPING
        </UpperDivChilds>
        <UpperDivChilds
          onClick={() => navigate("/art")}
          className={styles.upperChildHover}
        >
          ART
        </UpperDivChilds>
      </div>

      <div style={sticky}>
        <div style={{ marginRight: "25px" }}>
          <img
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", width: "100px" }}
            src={ndtv}
            alt="ndtv_logo"
          />
        </div>
        <StickyDivChilds
          onClick={() => navigate("/livetv")}
          className={styles.lowerChildHover}
        >
          LIVE TV
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/latest")}
          className={styles.lowerChildHover}
        >
          LATEST
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/covid")}
          className={styles.lowerChildHover}
        >
          COVID
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/india")}
          className={styles.lowerChildHover}
        >
          INDIA
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/opinion")}
          className={styles.lowerChildHover}
        >
          OPINION
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/video")}
          className={styles.lowerChildHover}
        >
          VIDEO
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/cities")}
          className={styles.lowerChildHover}
        >
          CITIES
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/world")}
          className={styles.lowerChildHover}
        >
          WORLD
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/offbeat")}
          className={styles.lowerChildHover}
        >
          OFFBEAT
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/trends")}
          className={styles.lowerChildHover}
        >
          TRENDS
        </StickyDivChilds>
        <StickyDivChilds
          onClick={() => navigate("/photos")}
          className={styles.lowerChildHover}
        >
          PHOTOS
        </StickyDivChilds>
        <div
          onClick={handleMore}
          title="More"
          style={{ cursor: "pointer", margin: "0px 5px" }}
        >
          <img
            style={{ marginTop: "5px", width: "18px" }}
            src={more}
            alt="more_icon"
          />
        </div>
        <a href="https://twitter.com/ndtv">
          <AfterMoreIcon title="Twitter">
            <AfterMoreIconImage src={twitter} alt="twitter_icon" />
          </AfterMoreIcon>
        </a>
        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=237467320636">
          <AfterMoreIcon title="Facebook">
            <AfterMoreIconImage src={facebook} alt="facebook_icon" />
          </AfterMoreIcon>
        </a>
        <a href="https://www.kooapp.com/profile/ndtv">
          <AfterMoreIcon title="Koo">
            <AfterMoreIconImage src={koo} alt="koo_icon" />
          </AfterMoreIcon>
        </a>
        <AfterMoreIcon title="New Story">
          <AfterMoreIconImage src={smartWatch} alt="smart_watch_icon" />
        </AfterMoreIcon>
        <AfterMoreIcon title="Notification">
          <AfterMoreIconImage src={bell} alt="bell_icon" />
        </AfterMoreIcon>
        <AfterMoreIcon onClick={handleSearchShow} title="Search">
          <AfterMoreIconImage src={search} alt="search_icon" />
        </AfterMoreIcon>
      </div>
      {searchShow ? (
        <SearchDiv>
          <input
            style={{ width: "200px", height: "20px" }}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            value={searchValue}
            placeholder="Search here..."
          />
          <button
            style={{
              width: "40px",
              fontWeight: "550",
              background: "#6288a5",
              color: "white",
              border: "transparent",
              height: "20px",
              borderRadius: "3px",
              marginLeft: "5px"
            }}
            onClick={handleSearch}
          >
            Go
          </button>
        </SearchDiv>
      ) : null}
      {show ? (
        <div style={MoreSticky}>
          <StickyDivChilds
            onClick={() => navigate("/south")}
            className={styles.lowerChildHover}
          >
            SOUTH
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/people")}
            className={styles.lowerChildHover}
          >
            PEOPLE
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/science")}
            className={styles.lowerChildHover}
          >
            SCIENCE
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/photos")}
            className={styles.lowerChildHover}
          >
            PHOTOS
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/jobs")}
            className={styles.lowerChildHover}
          >
            JOBS
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/weather")}
            className={styles.lowerChildHover}
          >
            WEATHER
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/tvSchedule")}
            className={styles.lowerChildHover}
          >
            TV SCHEDULE
          </StickyDivChilds>
          <StickyDivChilds
            onClick={() => navigate("/trains")}
            className={styles.lowerChildHover}
          >
            TRAINS
          </StickyDivChilds>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
