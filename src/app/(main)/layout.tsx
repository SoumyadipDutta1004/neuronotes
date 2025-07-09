import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      defaultOpen={defaultOpen}
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="overflow-hidden h-[calc(100vh-16px)]">
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
