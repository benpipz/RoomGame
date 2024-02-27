import Picture from "./Picture";
import Card from "./Card";
import { useState, useEffect } from "react";
import { GetForecast } from "./lesArcsService";
import LivestreamEmbed from "./LesarcsStream";
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
        Weather: weather.current.condition.text,
        Temp: weather.current.temp_c + "\u00b0C",
        Snow_Chances:
          weather.forecast.forecastday[0].day.daily_chance_of_snow + "%",
        Total_snow_today:
          weather.forecast.forecastday[0].day.totalsnow_cm + "cm",
      });
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
          title={"Current Condition"}
          img={weather.current.condition.icon}
          data={cardData}
        />
      )}
      <Picture />
    </div>
  );
};

export default LesArcsPage;
