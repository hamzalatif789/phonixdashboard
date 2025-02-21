import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function TravelAgencyDashboard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profit",
        backgroundColor: "#3B82F6",
        data: [900, 700, 800, 850, 600, 750],
      },
      {
        label: "Revenue",
        backgroundColor: "#22C55E",
        data: [1100, 900, 950, 1000, 850, 920],
      },
      {
        label: "Expenses",
        backgroundColor: "#60A5FA",
        data: [500, 400, 450, 500, 480, 510],
      },
    ],
  };

  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      {/* Left Section - Travel Stats */}
      <div>
        <h1 className="text-2xl font-bold">Travel Agency</h1>
        <Card className="p-4 mt-4">
          <h2 className="text-lg font-semibold">Total Value</h2>
          <p className="text-2xl font-bold">$2,345.00</p>
          <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
            23.35% From last month
          </span>
        </Card>

        <Card className="p-4 mt-4">
          <h2 className="text-lg font-semibold">Booked Flights</h2>
          <p className="text-xl font-bold">1,432</p>
          <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
            3.98% From last month
          </span>
          <p className="text-sm mt-2">
            Rain Chances <span className="font-bold">95%</span>
          </p>
        </Card>

        <Card className="p-4 mt-4">
          <h2 className="text-lg font-semibold">Commission</h2>
          <p className="text-2xl font-bold">$3,339.00</p>
          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
            12.21% From last month
          </span>
        </Card>

        <Card className="p-4 mt-4">
          <h2 className="text-lg font-semibold">Canceled Booking</h2>
          <p className="text-xl font-bold">120.00</p>
          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
            5.76% From last month
          </span>
        </Card>
      </div>

      {/* Right Section - Financial Activities */}
      <div>
        <h2 className="text-2xl font-bold">Financial activities</h2>
        <p className="text-sm text-gray-600">Yearly Balance</p>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-blue-600 text-sm">■ Profit</span>
          <span className="text-green-600 text-sm">■ Revenue</span>
          <span className="text-blue-400 text-sm">■ Expenses</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Hotel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hotel">Hotel</SelectItem>
              <SelectItem value="flight">Flight</SelectItem>
              <SelectItem value="package">Package</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-6">
          <Button className="mr-2">New Package</Button>
          <Button variant="default">Book Now</Button>
        </div>

        {/* Financial Activities Chart */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <Bar
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
}
