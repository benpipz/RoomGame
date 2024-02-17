import React, { useEffect, useState } from "react";

const Card = ({ img, title, data }) => {
  const [mydata, setMydata] = useState();

  useEffect(() => {
    setMydata(
      Object.entries(data).map(([key, value]) => {
        let newKey = key.replace(/_/g, " ");
        return (
          <h2 key={key}>
            <strong>{newKey}:</strong> {value}
          </h2>
        );
      }),
    );
  }, [data]);
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={img}></img>
      {mydata && mydata}
    </div>
  );
};

export default Card;
