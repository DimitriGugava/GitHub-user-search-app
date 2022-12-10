import "./MainComponent.css";
import moon from "../icons/moon.svg";
import loop from "../icons/loop.svg";
import UserProfile from "./UserProfileComponent/UserProfile";
import sun from "../icons/sun.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const MainComponent = (props) => {
  const [dark, setDark] = useState(false);

  const changeToDark = (props) => {
    setDark((current) => !current);
  };

  const [name, setName] = useState("");
  const [changedName, setChangedName] = useState("");

  const getData = () => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => setChangedName(res.data));
  };

  console.log(changedName);
  console.log(name);

  return (
    <div
      className="MainBackground"
      style={{
        backgroundColor: dark ? "rgba(20, 29, 47, 1)" : "",
      }}
    >
      <div className="MainContainer">
        <div className="headerbox">
          <h1
            className="headerlargetext"
            style={{
              color: dark ? "rgba(255, 255, 255, 1)" : "",
            }}
          >
            devfinder
          </h1>
          <div className="darklightheaderbox">
            {dark ? (
              <h2 className="headersmalltext">LIGHT</h2>
            ) : (
              <h2 className="headersmalltext">DARK</h2>
            )}
            {dark ? (
              <img
                src={sun}
                alt="Moon"
                className="darklighticon"
                onClick={changeToDark}
              />
            ) : (
              <img
                src={moon}
                alt="sun"
                className="darklighticon"
                onClick={changeToDark}
              />
            )}
          </div>
        </div>
        <div
          className="searchContainer"
          style={{
            backgroundColor: dark ? "#1E2A47" : "",
          }}
        >
          <img src={loop} alt="loop" className="loopIcon" />
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="searchInput"
            placeholder="Search GitHub username…"
            style={{
              backgroundColor: dark ? "#1E2A47" : "",
              color: dark ? "rgba(255, 255, 255, 1)" : "",
            }}
          />
          <button className="searchButton" onClick={getData}>
            Search
          </button>
        </div>
        <UserProfile dark={dark} info={props.info} changedName={changedName} />
      </div>
    </div>
  );
};

export default MainComponent;
