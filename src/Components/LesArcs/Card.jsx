import React, { useEffect, useState } from "react";

const Card = ({ img, title, data, weather, temp, snowchances, total }) => {
  debugger;
  return (
    <div className="card">
      <img className="card-image" src={img}></img>
      <h2 className="card-title">{title}</h2>
      {/* <div>{data && mydata}</div> */}
      <h2>{weather && "Weather:   " + weather}</h2>
      <h2>{temp && "Temperture:  " + temp + "\u00b0C"}</h2>
      <h2>{total != null ? "Snowed today:  " + snowchances + "cm" : ""}</h2>
      <h2>{snowchances != null ? "Snow chance:  " + snowchances + "%" : ""}</h2>
    </div>
  );
};

export default Card;
