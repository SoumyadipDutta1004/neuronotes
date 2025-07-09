import {
  IconDashboard,
  IconHelp,
  IconMessageDots,
  IconSearch,
  IconSettings2,
} from "@tabler/icons-react";

export const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
    subMenu: [
      {
        title: "Notes",
        url: "/dashboard/notes",
      },
      {
        title: "Links",
        url: "/dashboard/links",
      },
      {
        title: "Youtube",
        url: "/dashboard/youtube",
      },
      {
        title: "X",
        url: "/dashboard/x",
      },
    ],
  },
  {
    title: "Chat",
    url: "/chat",
    icon: IconMessageDots,
  },
];

export const navSecondary = [
  {
    title: "Settings",
    url: "#",
    icon: IconSettings2,
  },
  {
    title: "Get Help",
    url: "#",
    icon: IconHelp,
  },
  {
    title: "Search",
    url: "#",
    icon: IconSearch,
  },
];
