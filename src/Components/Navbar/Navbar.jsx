import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import companyLogo from "../../images/companyLogo.jpg";
import MyLinkButton from "../Utils/MyButton";
import CountdownTimer from "../GraphConent/Content/CountdownTimer";
const Navbar = () => {
  const onLogoClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };
  return (
    <div className="navbar2">
      <>
        <img
          src={companyLogo}
          onClick={onLogoClick}
          style={{
            borderRadius: "90%",
            cursor: "pointer",
            width: "80px",
            height: "80px",
          }}
        ></img>
      </>
      <h1>Room Chooser</h1>
      <CountdownTimer />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <MyLinkButton className="myButton" text="Home" link="/home" />
        <MyLinkButton className="myButton" text="The room" link="/graph" />
        <MyLinkButton className="myButton" text="Les arcs" link="/lesarcs" />
        <MyLinkButton className="myButton" text="Games" link="/" />
      </div>
    </div>
  );
};

export default Navbar;
