import React from "react";
import Chart from "react-apexcharts";
import { ArrowUp } from "lucide-react";

const UsersLeadsChart = () => {
  const usersData = {
    series: [{ name: "New Users", data: [30, 35, 32, 40, 42, 38, 45, 42] }],
    options: {
      chart: { type: "area", height: 150, sparkline: { enabled: true } },
      stroke: { curve: "smooth", width: 2 },
      fill: { type: "gradient", gradient: { shadeIntensity: 0.4, opacityFrom: 0.5, opacityTo: 0.1 } },
      colors: ["#377dff"],
      xaxis: { categories: ["28 Jan, 25", "29 Jan, 25", "30 Jan, 25", "31 Jan, 25", "1 Feb, 25", "2 Feb, 25", "3 Feb, 25", "8 Feb, 25"] },
      tooltip: { enabled: true },
    },
  };

  const leadsData = {
    series: [{ name: "New Leads", data: [28, 33, 31, 37, 40, 42, 45, 43] }],
    options: {
      chart: { type: "area", height: 150, sparkline: { enabled: true } },
      stroke: { curve: "smooth", width: 2 },
      fill: { type: "gradient", gradient: { shadeIntensity: 0.4, opacityFrom: 0.5, opacityTo: 0.1 } },
      colors: ["#4db5ff"],
      xaxis: { categories: ["29 Jan, 25", "30 Jan, 25", "31 Jan, 25", "1 Feb, 25", "2 Feb, 25", "3 Feb, 25", "4 Feb, 25", "8 Feb, 25"] },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between gap-6">
      {/* New Users */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold">New Users & Leads</h2>
        <p className="text-sm text-gray-500">Payment received across all channels</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-blue-600 text-lg">👤</span>
          <span className="text-gray-700 font-semibold">New Users: <strong>42</strong></span>
          <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded flex items-center">
            <ArrowUp size={14} className="mr-1" /> +24.5%
          </span>
        </div>
        <Chart options={usersData.options} series={usersData.series} type="area" height={150} />
      </div>

      {/* New Leads */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-2 mt-7">
          <span className="text-blue-600 text-lg">⚡</span>
          <span className="text-gray-700 font-semibold">New Leads: <strong>45</strong></span>
          <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded flex items-center">
            <ArrowUp size={14} className="mr-1" /> +30.5%
          </span>
        </div>
        <Chart options={leadsData.options} series={leadsData.series} type="area" height={150} />
      </div>
    </div>
  );
};

export default UsersLeadsChart;
