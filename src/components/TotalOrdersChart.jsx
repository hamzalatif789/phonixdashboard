import React from 'react';
import Chart from 'react-apexcharts';

const TotalOrdersChart = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    colors: ['#2563eb'],
  };

  const series = [
    {
      name: 'Total Orders',
      data: [150, 200, 170, 220, 260, 300],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default TotalOrdersChart;
