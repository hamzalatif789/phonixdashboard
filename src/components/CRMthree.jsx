import React from "react";
import Chart from "react-apexcharts";

const ContactsBySource = () => {
  const totalContacts = 560; // Sum of all contacts
  const contactSources = [
    { name: "Organic", value: 80, color: "#377dff" },
    { name: "Paid Search", value: 65, color: "#28a745" },
    { name: "Direct", value: 40, color: "#007bff" },
    { name: "Social", value: 220, color: "#4db5ff" },
    { name: "Referrals", value: 120, color: "#f88" },
    { name: "Others", value: 35, color: "#ffcc80" },
  ];

  const chartOptions = {
    chart: { type: "donut" },
    labels: contactSources.map((source) => source.name),
    colors: contactSources.map((source) => source.color),
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => totalContacts,
            },
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between">
      {/* Left - Contact Sources */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold">New Contacts by Source</h2>
        <p className="text-sm text-gray-500">Payment received across all channels</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {contactSources.map((source, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: source.color }}></span>
                <span className="text-gray-600">{source.name}</span>
              </div>
              <span className="text-black font-semibold">{source.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Donut Chart */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Chart options={chartOptions} series={contactSources.map((s) => s.value)} type="donut" width="250" />
      </div>
    </div>
  );
};

export default ContactsBySource;
