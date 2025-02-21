import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

Chart.register(...registerables);

export default function VisitorsAndHolidays() {
  const [date, setDate] = useState(new Date());

  // Visitor Graph Data
  const visitorData = {
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
      "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
      "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
      "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    datasets: [
      {
        label: "Users Per Second",
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200)), // Generates random visitor counts
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const visitorOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: true }, ticks: { stepSize: 50 } },
    },
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Visitors Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold">Visitors</h2>
        <p className="text-sm text-gray-600">Users across countries</p>
        <p className="text-3xl font-bold mt-2">157 <span className="text-sm font-normal">User per second</span></p>

        {/* Visitor Chart */}
        <div className="h-40 mt-4">
          <Line data={visitorData} options={visitorOptions} />
        </div>

        {/* Country-wise Visitor Data */}
        <div className="mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-600">
                <th className="text-left">Country Name</th>
                <th className="text-right">Users</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2"><span className="mr-2">🇮🇳</span> India</td>
                <td className="text-right">92,896 (41.6%)</td>
                <td className="text-right text-green-600">+15.21%</td>
              </tr>
              <tr className="border-t">
                <td className="py-2"><span className="mr-2">🇨🇳</span> China</td>
                <td className="text-right">50,496 (32.8%)</td>
                <td className="text-right text-orange-600">+5.21%</td>
              </tr>
              <tr className="border-t">
                <td className="py-2"><span className="mr-2">🇺🇸</span> USA</td>
                <td className="text-right">45,679 (24.3%)</td>
                <td className="text-right text-blue-600">+22.12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Holidays Section */}
      <Card className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Holidays</h2>
          <button className="text-blue-600 text-sm">Calendar ⬇</button>
        </div>
        <p className="text-sm text-gray-600">Holidays next month</p>

        {/* Calendar */}
        <div className="mt-4">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date }) => {
              // Dummy data: Show dots on specific dates
              const holidays = [5, 12, 19, 25];
              return holidays.includes(date.getDate()) ? (
                <div className="flex justify-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                </div>
              ) : null;
            }}
            className="w-full rounded-lg border shadow-md"
          />
        </div>
      </Card>
    </div>
  );
}
