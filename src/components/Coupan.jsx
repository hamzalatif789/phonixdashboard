import React from 'react';
import Chart from 'react-apexcharts';

const Coupan = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Coupon A', 'Coupon B', 'Coupon C'],
    colors: ['#f59e0b', '#3b82f6', '#ef4444'],
    legend: {
      position: 'bottom',
    },
  };

  const series = [30, 50, 20];

  return <Chart options={options} series={series} type="pie" height={350} />;
};

export default Coupan;
