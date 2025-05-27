import { useState } from "react";
import AppHeader from "@/components/header/AppHeader";
import AppSideBar from "@/components/sidebar/AppSideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            {/* Header */}
            <header className="w-full h-header border-b-[1px] border-b-[rgba(0,0,0,0.3)] shadow-lg relative">
                <AppHeader />
            </header>

            <div className={`h-full grid ${collapsed ? "md:[grid-template-columns:60px_auto]" : "md:[grid-template-columns:300px_auto]"}`}>
                {/* Sidebar */}
                <aside className="hidden md:block overflow-auto border-r-[1px] border-r-[rgba(0,0,0,0.3)]">
                    <AppSideBar collapsed={collapsed} toggleCollapsed={() => setCollapsed(!collapsed)} />
                </aside>

                {/* App Body */}
                <main className="h-main bg-main-bg overflow-auto p-2">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
