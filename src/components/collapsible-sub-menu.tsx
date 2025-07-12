import Link from "next/link";
import { CollapsibleContent } from "./ui/collapsible";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
// import { useState } from "react";
import { type Icon } from "@tabler/icons-react";

type CollapsibleSubMenuProps = {
  item: {
    title: string;
    url: string;
    icon: Icon;
  }[];
};

export default function CollapsibleSubMenu({ item }: CollapsibleSubMenuProps) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // <Collapsible
    //   open={isOpen}
    //   onOpenChange={setIsOpen}
    //   className="group/collapsible"
    // >
      // <CollapsibleContent>
        <SidebarMenuSub>
          {item.map((item) => (
            <SidebarMenuSubItem key={item.title}>
              <SidebarMenuSubButton
                asChild
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      // </CollapsibleContent>
    // </Collapsible>
  );
}
