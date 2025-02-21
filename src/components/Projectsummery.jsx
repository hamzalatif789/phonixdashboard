import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Making the Butterflies shoot each other dead",
    assignees: ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg"],
    startDate: "Dec 12, 2018",
    deadline: "Dec 12, 2026",
    calculation: "$4",
    progress: { current: 145, total: 145 },
    status: "Completed",
  },
  {
    name: "Project Doughnut Dungeon",
    assignees: ["/avatars/4.jpg", "/avatars/5.jpg"],
    startDate: "Jan 9, 2019",
    deadline: "Dec 9, 2022",
    calculation: "$657k",
    progress: { current: 148, total: 223 },
    status: "In Progress",
  },
  {
    name: "Making the Butterflies shoot each other dead",
    assignees: ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg"],
    startDate: "Dec 12, 2018",
    deadline: "Dec 12, 2026",
    calculation: "$4",
    progress: { current: 145, total: 145 },
    status: "Completed",
  },
  {
    name: "Project Doughnut Dungeon",
    assignees: ["/avatars/4.jpg", "/avatars/5.jpg"],
    startDate: "Jan 9, 2019",
    deadline: "Dec 9, 2022",
    calculation: "$657k",
    progress: { current: 148, total: 223 },
    status: "In Progress",
  },
  {
    name: "Making the Butterflies shoot each other dead",
    assignees: ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg"],
    startDate: "Dec 12, 2018",
    deadline: "Dec 12, 2026",
    calculation: "$4",
    progress: { current: 145, total: 145 },
    status: "Completed",
  },
  {
    name: "Project Doughnut Dungeon",
    assignees: ["/avatars/4.jpg", "/avatars/5.jpg"],
    startDate: "Jan 9, 2019",
    deadline: "Dec 9, 2022",
    calculation: "$657k",
    progress: { current: 148, total: 223 },
    status: "In Progress",
  },
];

export default function ProjectTable() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Assignees</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Calculation</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="text-blue-500 font-medium">{project.name}</TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  {project.assignees.map((src, idx) => (
                    <Avatar key={idx} src={src} alt="Assignee" className="w-8 h-8 border-2 border-white rounded-full" />
                  ))}
                </div>
              </TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.deadline}</TableCell>
              <TableCell>{project.calculation}</TableCell>
              <TableCell>
                <Progress value={(project.progress.current / project.progress.total) * 100} />
                <span className="text-xs">
                  {project.progress.current} / {project.progress.total}
                </span>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  {project.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
