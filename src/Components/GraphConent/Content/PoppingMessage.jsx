import React from "react";

const PoppingMessage = ({ info }) => {
  return (
    <div className={`notification-box ${info ? "visible" : "hidden"}`}>
      <h2>{info}</h2>
    </div>
  );
};

export default PoppingMessage;
