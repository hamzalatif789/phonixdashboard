import React from "react";
import Chart from "react-apexcharts";

const ContactsCreatedChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "50%" },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: [
        "31 Jan, 25",
        "1 Feb, 25",
        "2 Feb, 25",
        "3 Feb, 25",
        "4 Feb, 25",
        "5 Feb, 25",
        "6 Feb, 25",
        "7 Feb, 25",
        "8 Feb, 25",
      ],
    },
    yaxis: { title: { text: "Revenue" } },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    colors: ["#A0A0A0", "#007bff"], // Gray for projected, Blue for actual
  };

  const chartSeries = [
    {
      name: "Actual Revenue",
      data: [24, 30, 28, 32, 40, 27, 20, 35, 50],
    },
    {
      name: "Projected Revenue",
      data: [36, 38, 35, 42, 50, 37, 30, 45, 55],
    },
  ];

  return (
    <div className="  ">
      <h2 className="text-3xl font-semibold">Contacts Created</h2>
      <p className="text-sm text-gray-500">Payment received across all channels</p>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default ContactsCreatedChart;
