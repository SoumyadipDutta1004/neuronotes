import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { createDocument } from "@/server-actions/createDocument";

export function CreateDocumentsDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-48">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={createDocument}>
          <DialogHeader>
            <DialogTitle>Create Document</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title-1">
                Title<span className="text-red-500">*</span>
              </Label>
              <Input id="title-1" name="title" placeholder="Enter Title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description-1">
                Description <span className="text-neutral-500">(Optional)</span>
              </Label>
              <Textarea
                id="description-1"
                name="description"
                placeholder="Type your message here."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link-1">
                Link <span className="text-neutral-500">(Optional)</span>
              </Label>
              <Input id="link-1" name="link" placeholder="Paste Link" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="type-1">
                Type<span className="text-red-500">*</span>
              </Label>
              <Select name="type">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="note">Note</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                  <SelectItem value="youtube">Youtube</SelectItem>
                  <SelectItem value="x">X</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
