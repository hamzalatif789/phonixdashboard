import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
import Chart from 'react-apexcharts';

export default function Chartfour() {
  const barChartOptions = {
    chart: { type: 'bar', height: 200 },
    colors: ['#4F46E5'],
    plotOptions: { bar: { columnWidth: '45%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'] },
  };
  
  const barChartData = [{ name: 'Orders', data: [10, 20, 15, 30, 25] }];

  const lineChartOptions = {
    chart: { type: 'line', height: 200 },
    colors: ['#4F46E5', '#22C55E'],
    stroke: { width: 2, curve: 'smooth' },
    markers: { size: 4 },
    dataLabels: { enabled: false },
    xaxis: { categories: ['01 May', '02 May', '03 May', '04 May', '05 May'] },
  };
  
  const lineChartData = [
    { name: 'May 03', data: [200, 300, 250, 350, 400] },
    { name: 'Apr 03', data: [150, 250, 200, 300, 350] }
  ];

  const pieChartOptions = {
    chart: { type: 'pie' },
    labels: ['Percentage Discount', 'Fixed Card Discount'],
    colors: ['#4F46E5', '#A78BFA'],
  };

  const pieChartData = [72, 18];

  const radialChartOptions = {
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        dataLabels: { show: true }
      }
    },
    colors: ['#4F46E5']
  };

  const radialChartData = [30];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Total Orders */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Total orders</h2>
          <p className="text-sm text-gray-500">Last 7 days</p>
          <Chart options={barChartOptions} series={barChartData} type="bar" height={150} />
          <p className="mt-2 text-center text-gray-600">Completed: 52%, Pending: 48%</p>
        </CardContent>
      </Card>

      {/* New Customers */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">New customers</h2>
          <p className="text-sm text-gray-500">Last 7 days</p>
          <Chart options={lineChartOptions} series={lineChartData} type="line" height={150} />
        </CardContent>
      </Card>

      {/* Top Coupons */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Top coupons</h2>
          <p className="text-sm text-gray-500">Last 7 days</p>
          <Chart options={pieChartOptions} series={pieChartData} type="pie" height={150} />
        </CardContent>
      </Card>

      {/* Paying vs Non-Paying */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Paying vs non-paying</h2>
          <p className="text-sm text-gray-500">Last 7 days</p>
          <Chart options={radialChartOptions} series={radialChartData} type="radialBar" height={150} />
        </CardContent>
      </Card>
    </div>
  );
}
