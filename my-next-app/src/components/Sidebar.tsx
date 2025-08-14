import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="h-screen">
            <SidebarContent className="h-full flex flex-col">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h1 className="text-xl font-bold">My App</h1>
                </div>

              <SidebarGroup className="flex-grow flex items-center w-full max-w-xs mx-auto mt-6">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items?.map((item) => (
                                <SidebarMenuItem key={item?.title}>
                                    <SidebarMenuButton asChild>
                                        <a
                                            href={item?.url}
                                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded"
                                        >
                                            <item.icon />
                                            <span>{item?.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    )
}