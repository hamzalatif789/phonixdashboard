import React, { useState } from "react";
import { ToggleLeft, ToggleRight, Briefcase, Users, FileText, RefreshCw } from "lucide-react";

const ProjectDashboard = () => {
  const [progress, setProgress] = useState(true);
  const [links, setLinks] = useState(true);
  const [timeframe, setTimeframe] = useState("month");

  const tasks = [
    { name: "Planning", width: "w-2/5", color: "bg-blue-500" },
    { name: "Research", width: "w-3/5", color: "bg-green-400" },
    { name: "Design", width: "w-full", color: "bg-purple-500" },
    { name: "Review", width: "w-1/4", color: "bg-yellow-400" },
    { name: "Develop", width: "w-2/3", color: "bg-red-500" },
    { name: "Testing", width: "w-1/3", color: "bg-teal-400" },
    { name: "Deployment", width: "w-1/5", color: "bg-indigo-500" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm mb-6">
        <div>
          <h1 className="text-2xl font-bold">Projects Dashboard</h1>
          <p className="text-gray-500">Here’s what’s going on at your business right now</p>
        </div>
        <div>
          <input type="date" className="border border-gray-300 p-2 rounded-lg text-gray-600" />
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <MetricCard icon={<Briefcase size={24} className="text-blue-500" />} number="32" title="Projects" subtitle="Awaiting processing" />
        <MetricCard icon={<Users size={24} className="text-green-500" />} number="94" title="Members" subtitle="Working hard" />
        <MetricCard icon={<FileText size={24} className="text-orange-500" />} number="23" title="Invoices" subtitle="Soon to be cleared" />
        <MetricCard icon={<RefreshCw size={24} className="text-red-500" />} number="3" title="Refunds" subtitle="Fresh start" />
      </div>

      {/* Project Roadmap */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Project: Zero Roadmap</h2>
        <p className="text-gray-500">Phase 2 is now ongoing</p>

        {/* Toggle and Timeframe Controls */}
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-semibold">Progress</span>
              <button onClick={() => setProgress(!progress)}>
                {progress ? <ToggleRight className="text-blue-500" size={24} /> : <ToggleLeft className="text-gray-400" size={24} />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-semibold">Links</span>
              <button onClick={() => setLinks(!links)}>
                {links ? <ToggleRight className="text-blue-500" size={24} /> : <ToggleLeft className="text-gray-400" size={24} />}
              </button>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-200 p-1 rounded-lg">
            {["week", "month", "year"].map((option) => (
              <button
                key={option}
                onClick={() => setTimeframe(option)}
                className={`px-4 py-1 rounded-lg text-sm font-semibold ${timeframe === option ? "bg-white shadow-md" : "text-gray-600"}`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Flex Row: Roadmap + Coming Soon Section */}
        <div className="flex flex-row gap-6">
          {/* Roadmap Timeline */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            {tasks.map((task, index) => (
              <div key={index} className="mb-3">
                <span className="text-gray-700 font-semibold">{task.name}</span>
                <div className="h-4 mt-1 rounded-lg shadow-inner bg-gray-200 relative">
                  <div className={`h-full ${task.width} ${task.color} rounded-lg`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <span className="text-orange-500 font-semibold text-sm bg-orange-100 px-2 py-1 rounded-md">
              🚀 COMING SOON
            </span>
            <h2 className="text-lg font-bold mt-2 text-gray-800">Early bird gets the warm leads!</h2>
            <p className="text-gray-500 mt-1">
              Phoenix CRM Dashboard is coming to market soon for fulfilling your every CRM-related need.
            </p>
            <p className="text-blue-500 mt-2 font-semibold cursor-pointer">Follow ThemeWagon at Bootstrap Market for updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Metric Card Component
const MetricCard = ({ icon, number, title, subtitle }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
      <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{number} {title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectDashboard;
