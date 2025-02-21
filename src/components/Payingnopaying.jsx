import React from 'react';
import Chart from 'react-apexcharts';

const Payingnopaying = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Paying', 'Non-Paying'],
    colors: ['#34d399', '#d1d5db'],
    legend: {
      position: 'bottom',
    },
  };

  const series = [70, 30];

  return <Chart options={options} series={series} type="donut" height={350} />;
};

export default Payingnopaying;
