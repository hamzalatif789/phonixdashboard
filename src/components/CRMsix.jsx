import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DealForecast = () => {
  return (
    <Card className="p-4 w-full">
      <h2 className="text-xl font-bold">Deal Forecast - $90,303</h2>
      <p className="text-sm text-gray-500">Show what you offer here</p>
      
      <div className="flex justify-between text-xs text-gray-600 mt-4">
        <span>$21.0k</span>
        <span>$3.4k</span>
        <span>$15.1k</span>
        <span>$4.6k</span>
      </div>
      
      <div className="w-full flex items-center mt-2 rounded-full overflow-hidden">
        <div className="h-3 bg-blue-700" style={{ width: "20%" }}></div>
        <div className="h-3 bg-blue-400" style={{ width: "40%" }}></div>
        <div className="h-3 bg-green-500" style={{ width: "20%" }}></div>
        <div className="h-3 bg-blue-300" style={{ width: "20%" }}></div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Deal Forecast by Owner</h3>
        <table className="w-full text-left mt-2 text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">CONTACT</th>
              <th className="py-2">APPOINTMENT</th>
              <th className="py-2">QUALIFIED</th>
              <th className="py-2">CLOSED WON</th>
              <th className="py-2">CONTACT SENT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Carrie Anne", appointment: 1000, qualified: "$1256", closedWon: "$1200", contactSent: "$1200" },
              { name: "Milind Mikuja", appointment: 558, qualified: "$2531", closedWon: "$2200", contactSent: "$2200" },
              { name: "Stanley Drinkwater", appointment: 1100, qualified: "$100", closedWon: "$100", contactSent: "$100" },
              { name: "Josef Stravinsky", appointment: 856, qualified: "$326", closedWon: "$265", contactSent: "$265" },
              { name: "Roy Anderson", appointment: 1200, qualified: "$1452", closedWon: "$865", contactSent: "$865" }
            ].map((data, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 text-blue-600">{data.name}</td>
                <td className="py-2">{data.appointment}</td>
                <td className="py-2">{data.qualified}</td>
                <td className="py-2">{data.closedWon}</td>
                <td className="py-2">{data.contactSent}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="py-2">Total</td>
              <td className="py-2">4,744</td>
              <td className="py-2">$5,665</td>
              <td className="py-2">$4,630</td>
              <td className="py-2">$4,630</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DealForecast;