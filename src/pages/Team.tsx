import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  MessageSquare,
  Calendar,
  MapPin,
  Users as UsersIcon,
  Crown,
  Shield,
  User
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@acmecorp.com",
    role: "Senior Frontend Developer",
    department: "Engineering",
    status: "Active",
    avatar: "JD",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "2022-01-15",
    projects: ["E-commerce Platform", "Mobile App"],
    skills: ["React", "TypeScript", "Node.js"],
    level: "Senior"
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice.smith@acmecorp.com",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    avatar: "AS",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    joinDate: "2021-06-20",
    projects: ["E-commerce Platform", "API Integration"],
    skills: ["Product Strategy", "Agile", "Data Analysis"],
    level: "Lead"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@acmecorp.com",
    role: "UI/UX Designer",
    department: "Design",
    status: "Active",
    avatar: "MJ",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    joinDate: "2023-03-10",
    projects: ["Mobile App Redesign"],
    skills: ["Figma", "Prototyping", "User Research"],
    level: "Mid-level"
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@acmecorp.com",
    role: "Backend Developer",
    department: "Engineering",
    status: "On Leave",
    avatar: "EW",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    joinDate: "2022-08-05",
    projects: ["API Integration"],
    skills: ["Python", "PostgreSQL", "AWS"],
    level: "Senior"
  },
  {
    id: 5,
    name: "Robert Jones",
    email: "robert.jones@acmecorp.com",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "Active",
    avatar: "RJ",
    phone: "+1 (555) 567-8901",
    location: "Denver, CO",
    joinDate: "2021-11-12",
    projects: ["E-commerce Platform", "Mobile App"],
    skills: ["Docker", "Kubernetes", "CI/CD"],
    level: "Senior"
  },
  {
    id: 6,
    name: "Lisa Park",
    email: "lisa.park@acmecorp.com",
    role: "Marketing Manager",
    department: "Marketing",
    status: "Active",
    avatar: "LP",
    phone: "+1 (555) 678-9012",
    location: "Los Angeles, CA",
    joinDate: "2023-01-08",
    projects: ["Marketing Campaign"],
    skills: ["Digital Marketing", "SEO", "Analytics"],
    level: "Mid-level"
  }
];

const statusColors = {
  "Active": "default",
  "On Leave": "secondary",
  "Inactive": "outline"
} as const;

const levelIcons = {
  "Junior": User,
  "Mid-level": Shield,
  "Senior": Crown,
  "Lead": Crown
} as const;

export default function Team() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(teamMembers.map(member => member.department))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Team</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team members and their roles
          </p>
        </div>
        <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-popover border-border">
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your team.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input
                  id="role"
                  placeholder="e.g. Frontend Developer"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept.toLowerCase()}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsInviteDialogOpen(false)}>
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Members
            </CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{teamMembers.length}</div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active
            </CardTitle>
            <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {teamMembers.filter(m => m.status === "Active").length}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{departments.length}</div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              On Leave
            </CardTitle>
            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {teamMembers.filter(m => m.status === "On Leave").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-border bg-card">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Team Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((member) => {
          const LevelIcon = levelIcons[member.level as keyof typeof levelIcons] || User;
          
          return (
            <Card key={member.id} className="border-border bg-card hover:shadow-soft transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/placeholder-${member.avatar}.jpg`} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover border-border">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={statusColors[member.status as keyof typeof statusColors]}>
                    {member.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <LevelIcon className="h-3 w-3" />
                    {member.level}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    {member.email}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    {member.phone}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {member.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">CURRENT PROJECTS</p>
                  <div className="flex flex-wrap gap-1">
                    {member.projects.map((project, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">SKILLS</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {member.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{member.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}