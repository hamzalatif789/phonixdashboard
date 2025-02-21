// Revenue Table Component
import React from 'react';

const RevenueTable = () => {
  const data = [
    { country: 'India', users: 92896, transactions: 67, revenue: 7560 },
    { country: 'China', users: 50496, transactions: 54, revenue: 6532 },
    { country: 'USA', users: 45679, transactions: 35, revenue: 5432 },
    { country: 'South Korea', users: 36453, transactions: 22, revenue: 4673 },
    { country: 'Vietnam', users: 15007, transactions: 17, revenue: 2456 },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Top Regions by Revenue</h3>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Country</th>
            <th className="text-left p-3">Users</th>
            <th className="text-left p-3">Transactions</th>
            <th className="text-left p-3">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 transition-all">
              <td className="p-3 font-medium">{item.country}</td>
              <td className="p-3">{item.users.toLocaleString()} <span className="text-gray-500 text-sm">({(item.users / 377620 * 100).toFixed(1)}%)</span></td>
              <td className="p-3">{item.transactions} <span className="text-gray-500 text-sm">({(item.transactions / 236 * 100).toFixed(1)}%)</span></td>
              <td className="p-3 font-medium">${item.revenue.toLocaleString()} <span className="text-gray-500 text-sm">({(item.revenue / 15758 * 100).toFixed(1)}%)</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTable;