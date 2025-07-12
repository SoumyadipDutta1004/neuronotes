import {
  IconBrandX,
  IconBrandYoutube,
  IconDashboard,
  IconHelp,
  IconLink,
  IconMessageDots,
  IconNote,
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
        icon: IconNote,
      },
      {
        title: "Links",
        url: "/dashboard/links",
        icon: IconLink,
      },
      {
        title: "Youtube",
        url: "/dashboard/youtube",
        icon: IconBrandYoutube,
      },
      {
        title: "X",
        url: "/dashboard/x",
        icon: IconBrandX,
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
