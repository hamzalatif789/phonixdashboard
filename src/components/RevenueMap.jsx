import React from 'react';
import Chart from 'react-apexcharts';

const RevenueMap = () => {
  const mapData = [
    { x: 'India', y: 7560 },
    { x: 'China', y: 6532 },
    { x: 'USA', y: 5432 },
    { x: 'South Korea', y: 4673 },
    { x: 'Vietnam', y: 2456 },
  ];

  const options = {
    chart: {
      type: 'treemap',
      height: 400,
    },
    title: {
      text: 'Top Regions by Revenue',
      align: 'left',
      style: { fontSize: '16px', fontWeight: 'bold' },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `$${val.toLocaleString()}`,
      style: { fontSize: '12px', fontWeight: 'bold' },
    },
    colors: ['#3B82F6', '#1D4ED8', '#0F172A'],
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <Chart options={options} series={[{ data: mapData }]} type="treemap" height={400} />
    </div>
  );
};

export default RevenueMap;
