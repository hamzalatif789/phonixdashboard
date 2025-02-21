import React from "react";

const flights = [
  {
    flightNo: "#24349",
    vendor: "Phoenix Firelines",
    vendorLogo: "🔥",
    weather: "15°C 🌩️ Stormy",
    route: "LAX → YVR",
    distance: "180 km, 00h:15m ago",
    destination: "965 km, in 01h:35m",
    status: "DELAYED",
    statusColor: "bg-yellow-500",
    time: "08:26 PM",
    date: "Sunday, Nov 06, 2022",
  },
  {
    flightNo: "#23421",
    vendor: "Qatar Airways",
    vendorLogo: "✈️",
    weather: "28°C ☀️ Sunny",
    route: "EBJ → CDG",
    distance: "600 km, 02h:15m ago",
    destination: "1,200 km, in 02h:35m",
    status: "ON TIME",
    statusColor: "bg-blue-500",
    time: "07:23 PM",
    date: "Monday, Nov 05, 2022",
  },
  {
    flightNo: "#23132",
    vendor: "Japan Airlines",
    vendorLogo: "🇯🇵",
    weather: "22°C 💨 Wind",
    route: "GOT → BCN",
    distance: "500 km, 00h:56m ago",
    destination: "3,455 km, in 03h:25m",
    status: "DEPARTURE",
    statusColor: "bg-green-500",
    time: "07:23 PM",
    date: "Monday, Nov 05, 2022",
  },
  {
    flightNo: "#22267",
    vendor: "Emirates",
    vendorLogo: "🇦🇪",
    weather: "5°C 🌧️ Heavy rain",
    route: "DIA → OSL",
    distance: "0 km, 00h:00m ago",
    destination: "00 km, in 00h:00m",
    status: "CANCELLED",
    statusColor: "bg-red-500",
    time: "07:23 PM",
    date: "Monday, Nov 05, 2022",
  },
];

const FlightsTable = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6 overflow-x-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-t-lg">
        ✈️ Flight Status
      </h2>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white uppercase text-sm">
            <th className="p-3 text-left">Flight No.</th>
            <th className="p-3 text-left">Vendor</th>
            <th className="p-3 text-left">Weather</th>
            <th className="p-3 text-left">Route</th>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index} className="border-b transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              <td className="p-3">{flight.flightNo}</td>
              <td className="p-3 flex items-center">
                {flight.vendorLogo} {flight.vendor}
              </td>
              <td className="p-3">{flight.weather}</td>
              <td className="p-3">{flight.route}</td>
              <td className="p-3">{flight.destination}</td>
              <td className="p-3">
                <span className={`px-3 py-1 text-white rounded-full shadow-md ${flight.statusColor}`}>
                  {flight.status}
                </span>
              </td>
              <td className="p-3">{flight.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Scroll Line */}
      <div className="h-2 bg-gray-300 mt-4 w-full rounded-full relative">
        <div className="h-2 bg-blue-500 w-1/4 animate-pulse rounded-full absolute left-0"></div>
      </div>
    </div>
  );
};

export default FlightsTable;
