import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  // Projection vs Actual Earnings Data
  const projectionChart = {
    options: {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: ["Jan 29", "Feb 02", "Feb 06", "Feb 10"],
      },
      legend: {
        position: "top",
      },
      colors: ["#2563EB", "#93C5FD"],
    },
    series: [
      {
        name: "Projected Revenue",
        data: [35000, 25000, 28000, 30000],
      },
      {
        name: "Actual Revenue",
        data: [42000, 47000, 32000, 36000],
      },
    ],
  };

  // Returning Customer Rate Data
  const customerRateChart = {
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      },
      legend: {
        position: "top",
      },
      colors: ["#2563EB", "#93C5FD", "#60A5FA"],
    },
    series: [
      {
        name: "Fourth time",
        data: [80, 85, 78, 80, 60, 70, 55, 50, 75, 90],
      },
      {
        name: "Third time",
        data: [60, 65, 70, 68, 55, 65, 50, 45, 70, 80],
      },
      {
        name: "Second time",
        data: [40, 50, 55, 45, 30, 50, 40, 35, 55, 70],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Projection vs Actual Earnings */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Projection vs Actual</h2>
        <p className="text-gray-500">Actual earnings vs projected earnings</p>
        <Chart options={projectionChart.options} series={projectionChart.series} type="bar" height={300} />
      </div>

      {/* Returning Customer Rate */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Returning Customer Rate</h2>
        <p className="text-gray-500">Rate of customers returning to your shop over time</p>
        <Chart options={customerRateChart.options} series={customerRateChart.series} type="line" height={300} />
      </div>
    </div>
  );
};

export default Dashboard;
