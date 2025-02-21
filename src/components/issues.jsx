import React from "react";
import Chart from "react-apexcharts";
import { Card, CardContent } from "@/components/ui/card";

const IssuesProgressSection = () => {
  const donutOptions = {
    labels: ["Product design", "Development", "QA & Testing", "Customer queries", "R & D"],
  };

  const donutSeries = [78, 63, 56, 36, 24];

  const lineOptions = {
    chart: { type: "line" },
    xaxis: { categories: ["25 Jan", "31 Jan", "6 Feb"] },
    stroke: { curve: "smooth" },
    markers: { size: 4 },
  };

  const lineSeries = [
    { name: "Open", data: [5, 7, 5], color: "#0091ff" },
    { name: "Issues found", data: [3, 6, 3], color: "#00c853" },
    { name: "In Progress", data: [10, 11, 8], color: "#ffa000" },
  ];

  return (
    <Card className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardContent>
        <h2 className="text-xl font-semibold">Issues Discovered</h2>
        <p className="text-sm text-gray-500">Newly found and yet to be solved</p>
        <Chart options={donutOptions} series={donutSeries} type="donut" height={250} />
      </CardContent>
      <CardContent>
        <h2 className="text-xl font-semibold">Project: eleven Progress</h2>
        <p className="text-sm text-gray-500">Deadline & progress</p>
        <Chart options={lineOptions} series={lineSeries} type="line" height={250} />
      </CardContent>
    </Card>
  );
};

export default IssuesProgressSection;
