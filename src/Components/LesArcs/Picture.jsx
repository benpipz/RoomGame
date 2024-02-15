import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Picture = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/name/france"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return <>{data && <img src={data[0].flags.png}></img>}</>;
};

export default Picture;
