import axios from "axios";

const baseUrl = "https://api.weatherapi.com/v1";

export const GetForecast = async (path, params) => {
  try {
    const response = await axios.get(`${baseUrl}${path}`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
