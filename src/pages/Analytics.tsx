import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  MousePointer, 
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Download,
  Filter
} from "lucide-react";

const analyticsData = {
  overview: [
    {
      title: "Total Visitors",
      value: "45,231",
      change: "+20.1%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Page Views",
      value: "891,234",
      change: "+18.7%",
      changeType: "positive" as const,
      icon: Eye,
    },
    {
      title: "Bounce Rate",
      value: "2.1%",
      change: "-0.4%",
      changeType: "positive" as const,
      icon: MousePointer,
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: "+12.3%",
      changeType: "positive" as const,
      icon: Clock,
    },
  ],
  topPages: [
    { page: "/dashboard", views: "12,456", percentage: 85 },
    { page: "/projects", views: "8,932", percentage: 65 },
    { page: "/team", views: "6,721", percentage: 50 },
    { page: "/analytics", views: "4,567", percentage: 35 },
    { page: "/settings", views: "2,134", percentage: 20 },
  ],
  trafficSources: [
    { source: "Direct", visitors: "18,234", percentage: 40 },
    { source: "Google Search", visitors: "13,675", percentage: 30 },
    { source: "Social Media", visitors: "9,123", percentage: 20 },
    { source: "Referrals", visitors: "4,199", percentage: 10 },
  ],
};

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track your website performance and user engagement.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2 bg-gradient-primary hover:opacity-90">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.overview.map((stat) => (
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
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top Pages */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Top Pages
                </CardTitle>
                <CardDescription>
                  Most visited pages on your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium text-foreground">{page.page}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={page.percentage} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground w-12">{page.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Traffic Sources
                </CardTitle>
                <CardDescription>
                  Where your visitors are coming from
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {analyticsData.trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">{source.source}</p>
                        <span className="text-sm text-muted-foreground">{source.visitors}</span>
                      </div>
                      <Progress value={source.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Traffic Analytics</CardTitle>
              <CardDescription>
                Detailed traffic patterns and user behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border border-dashed border-border rounded-lg">
                <div className="text-center space-y-2">
                  <Activity className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Traffic charts would be rendered here</p>
                  <Badge variant="outline">Interactive Charts</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">User Engagement</CardTitle>
              <CardDescription>
                How users interact with your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border border-dashed border-border rounded-lg">
                <div className="text-center space-y-2">
                  <MousePointer className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Engagement metrics would be displayed here</p>
                  <Badge variant="outline">Heat Maps & Click Tracking</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Conversions</CardTitle>
              <CardDescription>
                Track your conversion goals and funnel performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border border-dashed border-border rounded-lg">
                <div className="text-center space-y-2">
                  <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Conversion funnels would be shown here</p>
                  <Badge variant="outline">Goal Tracking</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}