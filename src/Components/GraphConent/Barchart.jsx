import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const labels = ["Benalice", "Tanyum", "Sparlissa"];

const BarChart = ({ mydata, leader }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: mydata,
        backgroundColor: "#541554",
        barThickness: 30,
        borderWidth: 1,
        barPercentage: 1,
      },
    ],
  };

  const [chartData, setChartData] = useState(data);
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

  const options = {
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  useEffect(() => {
    setChartData(data);
  }, [mydata]);

  return (
    <>
      <Bar
        options={options}
        data={chartData}
        style={{ maxHeight: "300px", width: "auto" }}
      />
    </>
  );
};

export default BarChart;
