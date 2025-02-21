import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  { title: "Designing the dungeon", date: "12 Nov, 2021", time: "12:00 PM", status: "Draft", color: "bg-blue-200" },
  { title: "Hiring a motion graphic designer", date: "12 Nov, 2021", time: "12:00 PM", status: "Urgent", color: "bg-yellow-400" },
  { title: "Daily Meetings Purpose, participants", date: "12 Dec, 2021", time: "05:00 AM", status: "On Process", color: "bg-blue-400" },
  { title: "Finalizing the geometric shapes", date: "12 Nov, 2021", time: "12:00 PM", status: "", color: "" },
  { title: "Daily meeting with team members", date: "1 Nov, 2021", time: "12:00 PM", status: "", color: "" },
];

const activities = [
  { date: "01 DEC, 2023", time: "10:30 AM", title: "Phoenix Template: Unleashing Creative Possibilities", author: "Shantinon Mekalan" },
  { date: "05 DEC, 2023", time: "12:30 AM", title: "Empower Your Digital Presence: The Phoenix Template Unveiled", author: "Bookworm22" },
  { date: "15 DEC, 2023", time: "2:30 AM", title: "Phoenix Template: Simplified Design, Maximum Impact", author: "Sharuka Nijbum" },
];

const TodoActivitySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-4">
        <h2 className="text-xl font-semibold">To do</h2>
        <p className="text-sm text-gray-500">Task assigned to me</p>
        <div className="flex justify-between items-center mt-2">
          <input type="text" placeholder="Search tasks" className="w-2/3 p-2 border rounded-md" />
          <span className="text-gray-500">23 tasks</span>
          <button className="text-blue-500">Sorting</button>
        </div>
        <div className="mt-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center gap-2">
                <Checkbox />
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.date} {task.time}</p>
                </div>
              </div>
              {task.status && <span className={`px-2 py-1 text-xs rounded-md ${task.color}`}>{task.status}</span>}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold">Activity</h2>
        <p className="text-sm text-gray-500">Recent activity across all projects</p>
        <div className="mt-4 pl-4 border-l-2 border-gray-300 relative">
          {activities.map((activity, index) => (
            <div key={index} className="mb-6 relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
              <p className="text-sm text-gray-500">{activity.date} {activity.time}</p>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-blue-500">by {activity.author}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TodoActivitySection;
