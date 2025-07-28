import { Outlet } from "react-router";
import { AppSidebar } from "~/components/layout/admin/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";

export default function AboutLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border/40" />
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
