import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Search, Filter, MoreVertical, Calendar, Users, Target, TrendingUp } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DataTable, createActionsColumn, createSelectionColumn, createSortableHeader } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the project data type
interface Project {
  id: number;
  name: string;
  description: string;
  status: "active" | "in-progress" | "planning" | "completed" | "on-hold";
  progress: number;
  team: { name: string; avatar: string }[];
  dueDate: string;
  priority: "high" | "medium" | "low";
  budget: string;
  tasks: { completed: number; total: number };
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern e-commerce solution with React and Node.js featuring advanced analytics",
      status: "active",
      progress: 75,
      team: [
        { name: "John Doe", avatar: "JD" },
        { name: "Jane Smith", avatar: "JS" },
        { name: "Mike Johnson", avatar: "MJ" }
      ],
      dueDate: "2024-03-15",
      priority: "high",
      budget: "$125,000",
      tasks: { completed: 23, total: 31 }
    },
    {
      id: 2,
      name: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      status: "in-progress",
      progress: 45,
      team: [
        { name: "Sarah Wilson", avatar: "SW" },
        { name: "David Brown", avatar: "DB" }
      ],
      dueDate: "2024-04-20",
      priority: "medium",
      budget: "$85,000",
      tasks: { completed: 9, total: 20 }
    },
    {
      id: 3,
      name: "AI Chat Assistant",
      description: "Intelligent chatbot for customer service automation",
      status: "planning",
      progress: 20,
      team: [
        { name: "Emily Davis", avatar: "ED" },
        { name: "Tom Anderson", avatar: "TA" }
      ],
      dueDate: "2024-05-10",
      priority: "low",
      budget: "$65,000",
      tasks: { completed: 4, total: 20 }
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence",
      status: "completed",
      progress: 100,
      team: [
        { name: "Alex Thompson", avatar: "AT" },
        { name: "Lisa Garcia", avatar: "LG" }
      ],
      dueDate: "2024-02-28",
      priority: "high",
      budget: "$95,000",
      tasks: { completed: 15, total: 15 }
    },
    {
      id: 5,
      name: "CRM Integration",
      description: "Customer relationship management system integration",
      status: "active",
      progress: 60,
      team: [
        { name: "Maria Rodriguez", avatar: "MR" },
        { name: "James Wilson", avatar: "JW" },
        { name: "Chris Lee", avatar: "CL" }
      ],
      dueDate: "2024-03-30",
      priority: "medium",
      budget: "$78,000",
      tasks: { completed: 12, total: 20 }
    },
    {
      id: 6,
      name: "API Gateway",
      description: "Microservices API gateway implementation",
      status: "on-hold",
      progress: 10,
      team: [
        { name: "Anna Taylor", avatar: "AT" }
      ],
      dueDate: "2024-06-15",
      priority: "low",
      budget: "$45,000",
      tasks: { completed: 2, total: 20 }
    },
  ];

  // Define table columns
  const columns: ColumnDef<Project>[] = [
    createSelectionColumn<Project>(),
    {
      accessorKey: "name",
      header: createSortableHeader("Project Name"),
      cell: ({ row }) => (
        <div className="min-w-0">
          <div className="font-semibold text-foreground truncate">{row.getValue("name")}</div>
          <div className="text-sm text-muted-foreground truncate max-w-[200px]">
            {row.original.description}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: createSortableHeader("Status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const variants = {
          active: "default",
          "in-progress": "secondary", 
          planning: "outline",
          completed: "destructive",
          "on-hold": "secondary"
        } as const;
        
        return (
          <Badge variant={variants[status as keyof typeof variants]} className="capitalize">
            {status.replace("-", " ")}
          </Badge>
        );
      },
    },
    {
      accessorKey: "progress",
      header: createSortableHeader("Progress"),
      cell: ({ row }) => {
        const progress = row.getValue("progress") as number;
        const tasks = row.original.tasks;
        return (
          <div className="flex items-center gap-3 min-w-[120px]">
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">{progress}%</span>
                <span className="text-muted-foreground">{tasks.completed}/{tasks.total}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "team",
      header: "Team",
      cell: ({ row }) => {
        const team = row.getValue("team") as { name: string; avatar: string }[];
        return (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {team.slice(0, 3).map((member, idx) => (
                <Avatar key={idx} className="h-7 w-7 border-2 border-background">
                  <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground font-medium">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
              ))}
              {team.length > 3 && (
                <div className="h-7 w-7 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">+{team.length - 3}</span>
                </div>
              )}
            </div>
            <span className="text-sm text-muted-foreground ml-1">{team.length} members</span>
          </div>
        );
      },
    },
    {
      accessorKey: "dueDate",
      header: createSortableHeader("Due Date"),
      cell: ({ row }) => {
        const date = new Date(row.getValue("dueDate"));
        const isOverdue = date < new Date() && row.original.status !== "completed";
        return (
          <div className={`flex items-center gap-1 ${isOverdue ? 'text-red-500' : ''}`}>
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {date.toLocaleDateString()}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "priority",
      header: createSortableHeader("Priority"),
      cell: ({ row }) => {
        const priority = row.getValue("priority") as string;
        const colors = {
          high: "text-red-500",
          medium: "text-yellow-500",
          low: "text-green-500"
        };
        
        return (
          <div className="flex items-center gap-1">
            <Target className={`h-4 w-4 ${colors[priority as keyof typeof colors]}`} />
            <span className={`text-sm font-medium capitalize ${colors[priority as keyof typeof colors]}`}>
              {priority}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "budget",
      header: createSortableHeader("Budget"),
      cell: ({ row }) => (
        <span className="font-semibold text-foreground">{row.getValue("budget")}</span>
      ),
    },
    createActionsColumn<Project>(),
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === "active").length,
    completed: projects.filter(p => p.status === "completed").length,
    overdue: projects.filter(p => new Date(p.dueDate) < new Date() && p.status !== "completed").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg mt-1">
            Manage and track your development projects
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 shadow-elegant">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-card border-border shadow-elegant">
            <DialogHeader>
              <DialogTitle className="text-card-foreground text-xl">Create New Project</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Add a new project to your workspace. Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-card-foreground font-medium">Project Name</Label>
                <Input
                  id="name"
                  placeholder="Enter project name"
                  className="bg-background border-border"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-card-foreground font-medium">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter project description"
                  className="bg-background border-border min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="priority" className="text-card-foreground font-medium">Priority</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate" className="text-card-foreground font-medium">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="budget" className="text-card-foreground font-medium">Budget</Label>
                <Input
                  id="budget"
                  placeholder="$0.00"
                  className="bg-background border-border"
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                className="border-border"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => setIsDialogOpen(false)}
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                Create Project
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Projects</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            <p className="text-xs text-muted-foreground">All projects</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Active</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{stats.active}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Completed</CardTitle>
            <Target className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">Finished</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Overdue</CardTitle>
            <Target className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{stats.overdue}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Data Table */}
      <Card className="bg-card border-border shadow-soft">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Project Management
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Advanced table view with sorting, filtering, and bulk actions
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-muted/50 border-border"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 border-border">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={filteredProjects} 
            searchKey="name"
            searchPlaceholder="Search projects by name..."
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;