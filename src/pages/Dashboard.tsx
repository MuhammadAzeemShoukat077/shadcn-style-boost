import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SamplePopups } from "@/components/SamplePopups";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  FolderKanban, 
  Clock, 
  CheckCircle,
  AlertCircle,
  BarChart3,
  Calendar,
  Plus
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12%",
    changeType: "positive" as const,
    icon: FolderKanban,
    description: "from last month"
  },
  {
    title: "Active Team Members",
    value: "47",
    change: "+3",
    changeType: "positive" as const,
    icon: Users,
    description: "new this week"
  },
  {
    title: "Completed Tasks",
    value: "1,247",
    change: "+23%",
    changeType: "positive" as const,
    icon: CheckCircle,
    description: "this quarter"
  },
  {
    title: "Avg. Response Time",
    value: "2.4h",
    change: "-18%",
    changeType: "positive" as const,
    icon: Clock,
    description: "improvement"
  },
];

const recentProjects = [
  {
    name: "E-commerce Platform",
    status: "In Progress",
    progress: 75,
    team: ["JD", "AS", "MK"],
    deadline: "Dec 15",
    priority: "High"
  },
  {
    name: "Mobile App Redesign", 
    status: "Review",
    progress: 90,
    team: ["EM", "RJ"],
    deadline: "Dec 10",
    priority: "Medium"
  },
  {
    name: "API Integration",
    status: "Planning",
    progress: 25,
    team: ["TK", "LP", "SD"],
    deadline: "Jan 5",
    priority: "Low"
  },
];

const recentActivity = [
  {
    user: "Alice Johnson",
    action: "completed task",
    target: "User Authentication",
    time: "2 hours ago",
    avatar: "AJ"
  },
  {
    user: "Bob Smith",
    action: "created project",
    target: "Dashboard Analytics",
    time: "4 hours ago",
    avatar: "BS"
  },
  {
    user: "Carol Williams",
    action: "updated milestone",
    target: "Mobile App v2.0",
    time: "6 hours ago",
    avatar: "CW"
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            This Month
          </Button>
          <Button className="gap-2 bg-gradient-primary hover:opacity-90">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 text-emerald-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === "positive" ? "text-emerald-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Projects */}
        <Card className="lg:col-span-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Projects</CardTitle>
            <CardDescription>
              Your most active projects and their current status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-foreground">{project.name}</h4>
                    <Badge 
                      variant={project.status === "In Progress" ? "default" : project.status === "Review" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    <Badge 
                      variant={project.priority === "High" ? "destructive" : project.priority === "Medium" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.priority}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.team.map((member, idx) => (
                          <Avatar key={idx} className="h-6 w-6 border-2 border-background">
                            <AvatarFallback className="text-xs bg-primary text-primary-foreground">{member}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Due {project.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                    {activity.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.user}</span>
                    {" "}<span className="text-muted-foreground">{activity.action}</span>
                    {" "}<span className="font-medium">"{activity.target}"</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to help you stay productive
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col gap-2 border-border hover:bg-accent">
              <FolderKanban className="h-5 w-5" />
              <span>New Project</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 border-border hover:bg-accent">
              <Users className="h-5 w-5" />
              <span>Invite Team</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 border-border hover:bg-accent">
              <BarChart3 className="h-5 w-5" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 border-border hover:bg-accent">
              <AlertCircle className="h-5 w-5" />
              <span>Support</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Template Features Demo */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Template Features Showcase</CardTitle>
          <CardDescription>
            All the components your client requested - ready for Next.js conversion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
              <div>
                <h4 className="font-medium text-foreground">Data Tables ✓</h4>
                <p className="text-sm text-muted-foreground">Check Projects page</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
              <div>
                <h4 className="font-medium text-foreground">Side Menu ✓</h4>
                <p className="text-sm text-muted-foreground">Responsive & themed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
              <div>
                <h4 className="font-medium text-foreground">Popups ✓</h4>
                <p className="text-sm text-muted-foreground">See below demo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
              <div>
                <h4 className="font-medium text-foreground">Breadcrumb ✓</h4>
                <p className="text-sm text-muted-foreground">Above this content</p>
              </div>
            </div>
          </div>
          
          <SamplePopups />
        </CardContent>
      </Card>
    </div>
  );
}