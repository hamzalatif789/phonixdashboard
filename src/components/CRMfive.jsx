import React from "react";
import Chart from "react-apexcharts";

const AdClicksChart = () => {
  const chartData = {
    series: [
      {
        name: "Feb Clicks",
        data: [1000, 1500, 2500, 2000, 2300, 2100, 2700, 2200],
      },
      {
        name: "Jan Clicks",
        data: [2000, 1800, 1000, 1200, 1700, 3100, 2900, 2500],
      },
    ],
    options: {
      chart: { type: "line", height: 300, toolbar: { show: false } },
      stroke: { curve: "smooth", width: 2 },
      markers: { size: 5 },
      colors: ["#73C2FB", "#0057D9"], // Light Blue & Dark Blue
      grid: { show: false }, // No Borders
      xaxis: {
        categories: [
          "29 Jan, 25",
          "30 Jan, 25",
          "31 Jan, 25",
          "1 Feb, 25",
          "2 Feb, 25",
          "3 Feb, 25",
          "4 Feb, 25",
          "8 Feb, 25",
        ],
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Ad Clicks</h2>
          <p className="text-sm text-gray-500">Check effectiveness of your ads</p>
        </div>
        <select className="border px-2 py-1 text-sm rounded-md">
          <option>Mar 1 - 31, 2022</option>
        </select>
      </div>
      <Chart options={chartData.options} series={chartData.series} type="line" height={300} />
    </div>
  );
};

export default AdClicksChart;
