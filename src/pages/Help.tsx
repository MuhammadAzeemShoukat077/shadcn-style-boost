import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Mail,
  Phone,
  Book,
  Video,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Star,
  Send,
  Lightbulb,
  Zap,
  Shield,
  Settings
} from "lucide-react";

const faqData = [
  {
    question: "How do I create a new project?",
    answer: "To create a new project, navigate to the Projects page and click the 'New Project' button. Fill in the project details including name, description, team members, and deadline. You can also choose from project templates to get started quickly."
  },
  {
    question: "How can I invite team members?",
    answer: "Go to the Team page and click 'Invite Member'. Enter their email address and select their role (Admin, Editor, or Viewer). They'll receive an invitation email to join your workspace."
  },
  {
    question: "How do I generate reports?",
    answer: "Visit the Reports page where you can create custom reports or use pre-built templates. You can schedule automatic report generation and export them in various formats (PDF, Excel, CSV)."
  },
  {
    question: "Can I customize my dashboard?",
    answer: "Yes! You can customize your dashboard by rearranging widgets, adding new metrics cards, and filtering data by date ranges. Use the settings panel to save your preferred layout."
  },
  {
    question: "How do I change my subscription plan?",
    answer: "Go to Settings > Billing to view and modify your subscription. You can upgrade, downgrade, or cancel your plan. Changes take effect immediately for upgrades or at the next billing cycle for downgrades."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 and GDPR standards. Your data is backed up daily and stored in secure data centers."
  }
];

const supportTopics = [
  {
    title: "Getting Started",
    description: "Learn the basics of using our platform",
    icon: Lightbulb,
    articles: 12
  },
  {
    title: "Project Management",
    description: "Managing projects and team collaboration",
    icon: Users,
    articles: 8
  },
  {
    title: "Analytics & Reports",
    description: "Understanding your data and generating reports",
    icon: FileText,
    articles: 15
  },
  {
    title: "Account & Billing",
    description: "Managing your account and subscription",
    icon: Settings,
    articles: 6
  },
  {
    title: "Security",
    description: "Keeping your data safe and secure",
    icon: Shield,
    articles: 5
  },
  {
    title: "API & Integrations",
    description: "Connecting with third-party tools",
    icon: Zap,
    articles: 10
  }
];

const recentTickets = [
  {
    id: "#12345",
    subject: "Unable to export large reports",
    status: "in-progress",
    priority: "high",
    created: "2 hours ago",
    agent: "Sarah Johnson"
  },
  {
    id: "#12344", 
    subject: "Team member permissions issue",
    status: "resolved",
    priority: "medium",
    created: "1 day ago",
    agent: "Mike Chen"
  },
  {
    id: "#12343",
    subject: "Dashboard loading slowly",
    status: "resolved",
    priority: "low",
    created: "3 days ago",
    agent: "Emily Davis"
  }
];

export default function Help() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
          <HelpCircle className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Help & Support</h1>
          <p className="text-muted-foreground mt-2">
            Get help, find answers, and contact our support team.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search for help articles, FAQs, or tutorials..." 
            className="pl-10 h-12 text-base"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-card hover:shadow-soft transition-all duration-200 cursor-pointer hover:scale-105">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto">
              <MessageCircle className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Get instant help from our support team</p>
            </div>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card hover:shadow-soft transition-all duration-200 cursor-pointer hover:scale-105">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email Support</h3>
              <p className="text-sm text-muted-foreground">Send us an email and we'll respond within 4 hours</p>
            </div>
            <Button variant="outline" className="w-full">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card hover:shadow-soft transition-all duration-200 cursor-pointer hover:scale-105">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto">
              <Phone className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone Support</h3>
              <p className="text-sm text-muted-foreground">Call us for urgent issues (Business plan only)</p>
            </div>
            <Button variant="outline" className="w-full">Call Now</Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportTopics.map((topic, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <topic.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{topic.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {topic.articles} articles
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Browse Articles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card className="max-w-2xl mx-auto border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Contact Support</CardTitle>
              <CardDescription>
                Can't find what you're looking for? Send us a message and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input placeholder="your.email@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="Brief description of your issue" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Priority</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Low</Button>
                  <Button variant="outline" size="sm">Medium</Button>
                  <Button variant="outline" size="sm">High</Button>
                  <Button variant="outline" size="sm">Urgent</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Please describe your issue in detail..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full gap-2 bg-gradient-primary hover:opacity-90">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Support Tickets</CardTitle>
              <CardDescription>
                Track your support requests and their status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTickets.map((ticket, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">{ticket.id}</span>
                      <Badge 
                        variant={
                          ticket.status === "resolved" ? "default" : 
                          ticket.status === "in-progress" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {ticket.status === "resolved" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {ticket.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1).replace('-', ' ')}
                      </Badge>
                      <Badge 
                        variant={
                          ticket.priority === "high" ? "destructive" : 
                          ticket.priority === "medium" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {ticket.priority}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-foreground">{ticket.subject}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Created {ticket.created}</span>
                      <span>Agent: {ticket.agent}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}