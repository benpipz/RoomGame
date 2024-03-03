import React, { useEffect, useState } from "react";
import { registerChart, labels, options } from "./BarChartLogic";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

registerChart();

const BarChart = ({ data }) => {
  const localdata = {
    labels,
    datasets: [
      {
        label: "",
        data,
        backgroundColor: "#541554",
        barThickness: 30,
        borderWidth: 1,
        barPercentage: 1,
      },
    ],
  };

  const [chartData, setChartData] = useState(localdata);

  useEffect(() => {
    setChartData(localdata);
  }, [data]);

  return (
    <Bar
      options={options}
      data={chartData}
      style={{ maxHeight: "300px", width: "auto" }}
    />
  );
};

BarChart.propTypes = {
  data: PropTypes.object,
};

export default BarChart;
