import React from "react";
import Chart from "react-apexcharts";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const SalesChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false },
    },
    stroke: {
      width: [3, 2],
      curve: "smooth",
    },
    xaxis: {
      categories: ["01 May", "05 May", "10 May", "15 May", "20 May", "25 May", "30 May"],
    },
    colors: ["#2563eb", "#60a5fa"],
  };

  const series = [
    { name: "Current Sales", data: [4000, 3000, 2000, 2780, 3890, 4800, 3500] },
    { name: "Previous Sales", data: [3000, 2500, 2200, 2600, 3300, 3900, 3200] },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Total Sales</h1>
          <p className="text-gray-500">Payment received across all channels</p>
        </div>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mar">Mar 1 - 31, 2022</SelectItem>
            <SelectItem value="apr">Apr 1 - 30, 2022</SelectItem>
            <SelectItem value="may">May 1 - 31, 2022</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default SalesChart;
