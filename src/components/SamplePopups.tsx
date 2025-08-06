import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Info, Trash2, Settings, Calendar } from "lucide-react";

export function SamplePopups() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { toast } = useToast();

  const handleCreate = () => {
    toast({
      title: "Success",
      description: "Item created successfully!",
    });
    setIsCreateOpen(false);
  };

  const handleDelete = () => {
    toast({
      title: "Deleted",
      description: "Item has been removed.",
      variant: "destructive",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Sample Popups & Modals
        </CardTitle>
        <CardDescription>
          Demonstration of various popup components including dialogs, alerts, and popovers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {/* Create Dialog */}
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your collection. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter item name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter description"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreate}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="flex items-center gap-2">
                <Trash2 className="h-4 w-4" />
                Delete Item
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  item and remove all associated data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Info Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                Info Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Quick Information</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a popover component that can display additional information
                    without taking up permanent space on the page.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Feature</Badge>
                  <Badge variant="outline">Responsive</Badge>
                  <Badge>Modern</Badge>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Settings Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Quick Settings
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Preferences</h4>
                  <p className="text-sm text-muted-foreground">
                    Configure your settings
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="h-8"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="h-8"
                  />
                </div>
                <Button size="sm" className="w-full">
                  Apply Settings
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-muted/50">
          <h4 className="font-medium mb-2">Available Popup Types:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Dialog:</strong> Modal overlays for forms and detailed content</li>
            <li>• <strong>Alert Dialog:</strong> Confirmation dialogs for critical actions</li>
            <li>• <strong>Popover:</strong> Contextual information and quick actions</li>
            <li>• <strong>Tooltip:</strong> Hover-based information (built into buttons)</li>
            <li>• <strong>Sheet:</strong> Side panels for navigation and forms</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}