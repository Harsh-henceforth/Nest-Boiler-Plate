import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-gray-800 text-white shadow-md p-4">
            <AppSidebar />
          </aside>
          <main className="flex-1 py-8 overflow-y-auto">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
