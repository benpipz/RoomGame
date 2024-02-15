import Picture from "./Picture";
import Card from "./Card";
import pic from "../../images/companyLogo2.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { GetForecast } from "./lesArcsService";
import LivestreamEmbed from "./LesarcsStream";
import CountdownTimer from "../GraphConent/Content/CountdownTimer";
CountdownTimer;
const LesArcsPage = () => {
  const [weather, setWeather] = useState(null);

  const params = {
    key: "b89e4a9626074d61b8d155243241302",
    q: "45.5718,6.8084",
  };
  useEffect(() => {
    const fetchData = async () => {
      const newResponse = await GetForecast("/forecast.json", params);
      setWeather(newResponse);
    };
    fetchData();
  }, []);

  const [cardData, setcardData] = useState();

  useEffect(() => {
    console.log(weather);
    if (weather) {
      setcardData({
        weather: weather.current.condition.text,
        temp: weather.current.temp_c,
        snowchances: weather.forecast.forecastday[0].day.daily_chance_of_snow,
        total: weather.forecast.forecastday[0].day.totalsnow_cm,
      });
      debugger;
    }
  }, [weather]);

  if (weather == null) {
    return <div></div>;
  }
  return (
    <div className="lesarcs">
      <LivestreamEmbed />
      {weather && cardData && (
        <Card
          img={weather.current.condition.icon}
          title={"Current Condition"}
          weather={cardData.weather}
          temp={cardData.temp}
          snowchances={cardData.snowchances}
          total={cardData.total}
        />
      )}
      <Picture />
    </div>
  );
};

export default LesArcsPage;
