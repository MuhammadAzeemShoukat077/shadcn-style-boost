import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

// Define route mappings
const routeNames: Record<string, string> = {
  "/": "Dashboard",
  "/projects": "Projects",
  "/team": "Team", 
  "/analytics": "Analytics",
  "/reports": "Reports",
  "/help": "Help & Support",
  "/settings": "Settings"
};

export function BreadcrumbNav() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {pathnames.length > 0 && <BreadcrumbSeparator />}
        
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = routeNames[routeTo] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
          
          return isLast ? (
            <BreadcrumbItem key={routeTo}>
              <BreadcrumbPage>{displayName}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <div key={routeTo} className="flex items-center gap-1.5">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={routeTo}>{displayName}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}