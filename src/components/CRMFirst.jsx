import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { PhoneCall, Calendar } from "lucide-react";

const stats = [
  {
    icon: <PhoneCall size={24} className="text-blue-500" />, 
    title: "Outgoing call",
    value: "3",
    subtitle: "Leads Today",
    change: "+24.5%",
    changeType: "positive",
  },
  {
    icon: <Calendar size={24} className="text-blue-500" />, 
    title: "Outgoing meeting",
    value: "12",
    subtitle: "This Week",
    change: "+24.5%",
    changeType: "positive",
  },
];

const leadSources = [
  { name: "None", count: 65 },
  { name: "Online Store", count: 74 },
  { name: "Advertisement", count: 32 },
  { name: "Seminar Partner", count: 25 },
  { name: "Partner", count: 23 },
];

export default function CRMStats() {
  return (
    <div className=" ">
      <h2 className="text-2xl font-semibold mb-4">CRM Dashboard</h2>
      <p className="text-gray-500 mb-6">Check your business growth in one place</p>
      
      <div className="flex gap-6">
        {/* Stats Cards */}
        <div className="flex gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 w-64">
              <CardContent>
                <div className="flex items-center gap-3 mb-2">
                  {stat.icon}
                  <span className="text-gray-500">{stat.title}</span>
                </div>
                <h3 className="text-3xl font-semibold">{stat.value}</h3>
                <p className="text-gray-500 text-sm">{stat.subtitle}</p>
                <span className={`text-sm mt-2 ${stat.changeType === "positive" ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Lead Sources */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Top 5 Lead Sources</h3>
          <Table>
            <TableBody>
              {leadSources.map((source, index) => (
                <TableRow key={index}>
                  <TableCell className="text-gray-700">{index + 1}. {source.name}</TableCell>
                  <TableCell className="text-gray-500 text-right">({source.count})</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
