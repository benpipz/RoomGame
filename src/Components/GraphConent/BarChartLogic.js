import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
  } from "chart.js";

export const registerChart = ()=> ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const labels = ["Benalice", "Tanyum", "Sparlissa"];

export const options = {
  plugins: {
    legend: {
      position: "left",
    },
  },
};