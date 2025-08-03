import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  Users,
  FolderKanban,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Share,
  Mail,
  Eye
} from "lucide-react";

const reportsData = {
  recent: [
    {
      title: "Monthly Performance Report",
      description: "Complete overview of project performance for November 2024",
      status: "completed",
      date: "Dec 1, 2024",
      size: "2.4 MB",
      downloads: 47,
      type: "PDF"
    },
    {
      title: "Team Productivity Analysis", 
      description: "Detailed analysis of team productivity and task completion rates",
      status: "in-progress",
      date: "Nov 28, 2024",
      size: "1.8 MB",
      downloads: 23,
      type: "XLSX"
    },
    {
      title: "Client Satisfaction Survey",
      description: "Quarterly client feedback and satisfaction metrics",
      status: "completed",
      date: "Nov 25, 2024", 
      size: "945 KB",
      downloads: 156,
      type: "PDF"
    },
    {
      title: "Financial Summary Q4",
      description: "Revenue, expenses, and profit analysis for Q4 2024",
      status: "scheduled",
      date: "Dec 15, 2024",
      size: "—",
      downloads: 0,
      type: "PDF"
    },
  ],
  templates: [
    {
      name: "Project Status Report",
      description: "Weekly project progress and milestone tracking",
      category: "Project Management",
      usage: 89
    },
    {
      name: "Team Performance Dashboard",
      description: "Individual and team productivity metrics",
      category: "HR Analytics",
      usage: 67
    },
    {
      name: "Financial Overview",
      description: "Revenue, costs, and profitability analysis",
      category: "Finance",
      usage: 45
    },
    {
      name: "Client Communication Log",
      description: "Client interactions and feedback tracking",
      category: "Client Relations",
      usage: 34
    },
  ]
};

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-1">
            Generate, manage, and share detailed reports for your projects.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule
          </Button>
          <Button className="gap-2 bg-gradient-primary hover:opacity-90">
            <FileText className="h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Reports
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">127</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+12</span>
              <span className="text-muted-foreground">this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Downloads
            </CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2,456</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+18%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Scheduled
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="h-3 w-3 text-blue-500" />
              <span className="text-blue-500">+3</span>
              <span className="text-muted-foreground">next week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Shared
            </CardTitle>
            <Share className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">34</div>
            <div className="flex items-center gap-1 text-xs">
              <Users className="h-3 w-3 text-purple-500" />
              <span className="text-purple-500">+7</span>
              <span className="text-muted-foreground">this week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4">
            {reportsData.recent.map((report, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-foreground">{report.title}</h4>
                        <Badge 
                          variant={
                            report.status === "completed" ? "default" : 
                            report.status === "in-progress" ? "secondary" : 
                            "outline"
                          }
                          className="text-xs"
                        >
                          {report.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {report.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                          {report.status === "scheduled" && <Calendar className="h-3 w-3 mr-1" />}
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('-', ' ')}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {report.type}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      
                      <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {report.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {report.downloads} downloads
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {report.status === "completed" && (
                        <>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Share className="h-4 w-4" />
                            Share
                          </Button>
                        </>
                      )}
                      {report.status === "in-progress" && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Eye className="h-4 w-4" />
                          Preview
                        </Button>
                      )}
                      {report.status === "scheduled" && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Calendar className="h-4 w-4" />
                          Edit Schedule
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {reportsData.templates.map((template, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Usage this month</span>
                      <span className="font-medium">{template.usage}%</span>
                    </div>
                    <Progress value={template.usage} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                      Use Template
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Upcoming Scheduled Reports</CardTitle>
              <CardDescription>
                Reports that are scheduled to be generated automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 flex items-center justify-center border border-dashed border-border rounded-lg">
                <div className="text-center space-y-2">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">No scheduled reports</p>
                  <Button variant="outline" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}