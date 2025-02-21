import { Card } from "@/components/ui/card";
import { useState } from "react";
// import Image from "next/image";
import gross from "@/assets/images/gross.png"
import booking from "@/assets/images/booking.png"

export default function GrossProfitAndBookings() {
  const [selectedYear, setSelectedYear] = useState("Last Fiscal Year");
  const [selectedCategory, setSelectedCategory] = useState("Hotel");

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Gross Profit Section */}
      <Card className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Gross Profit</h2>
          <select
            className="border rounded p-1 text-sm"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option>Last Fiscal Year</option>
            <option>Current Year</option>
          </select>
        </div>
        <p className="text-sm text-gray-600">Annual income according to the board</p>

        {/* Use an image instead of a dynamic chart */}
        <div className="mt-4 flex justify-center">
          <img
            src={gross}
            alt="Gross Profit Chart"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Data Labels */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-blue-600">Flight</span>
            <span>$162,791,400</span>
            <span className="text-green-600">+15.50%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-600">Flight (Package)</span>
            <span>$135,659,500</span>
            <span className="text-red-600">-11.09%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-600">Hotel</span>
            <span>$271,319,000</span>
            <span className="text-green-600">+29.98%</span>
          </div>
        </div>
      </Card>

      {/* Bookings Section */}
      <Card className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Bookings</h2>
          <select
            className="border rounded p-1 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Hotel</option>
            <option>Flight</option>
            <option>Car Rental</option>
          </select>
        </div>
        <p className="text-sm text-gray-600">Completed and canceled bookings</p>

        {/* Use an image instead of a dynamic chart */}
        <div className="mt-4 flex justify-center">
          <img
            src={booking}
            alt="Bookings Chart"
            width={400}
            height={250}
            className="rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
}
