// Updated Code with Lead Conversion & Revenue Target Section

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {/* Lead Conversion Section */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Lead Conversion</h2>
          <p className="text-sm text-gray-500">Stages of deals & conversion</p>
          <div className="mt-4">
            {[
              { stage: "Created", value: 100, color: "bg-red-400" },
              { stage: "Qualify Lead", value: 90, color: "bg-yellow-400" },
              { stage: "Offer", value: 80, color: "bg-blue-400" },
              { stage: "Objection", value: 60, color: "bg-sky-400" },
              { stage: "Closed Won", value: 53, color: "bg-green-400" },
            ].map((item, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm">{item.stage}</p>
                <div className="w-full h-4 bg-gray-200 rounded-md overflow-hidden">
                  <div className={`${item.color} h-full`} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Target Section */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Revenue Target</h2>
          <p className="text-sm text-gray-500">Country-wise target fulfilment</p>
          <div className="mt-4">
            {[
              { country: "India", value: 38_644 },
              { country: "Australia", value: 28_644 },
              { country: "Canada", value: 33_644 },
              { country: "Luxemburg", value: 30_644 },
            ].map((item, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm">{item.country}</p>
                <div className="w-full h-4 bg-gray-200 rounded-md overflow-hidden relative">
                  <div className="bg-blue-400 h-full" style={{ width: `${(item.value / 40_000) * 100}%` }}></div>
                  <span className="absolute right-2 text-white text-xs font-bold">${item.value.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
