import React from 'react';
import Chart from 'react-apexcharts';

const CustomersChart = () => {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    colors: ['#10b981'],
  };

  const series = [
    {
      name: 'New Customers',
      data: [50, 80, 60, 100, 120, 150],
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default CustomersChart;
