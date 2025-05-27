import { useState } from "react";
import AppHeader from "@/components/header/AppHeader";
import AppSideBar from "@/components/sidebar/AppSideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            {/* Header */}
            <header className="w-full h-header border-b border-[rgba(0,0,0,0.1)] shadow-lg relative">
                <AppHeader />
            </header>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`hidden md:block h-full border-r border-[rgba(0,0,0,0.1)] ${collapsed ? "w-[60px]" : "w-[300px]"}`}>
                    <AppSideBar collapsed={collapsed} toggleCollapsed={() => setCollapsed(!collapsed)} />
                </aside>

                {/* Main Content */}
                <main className="flex-1 h-full bg-main-bg overflow-auto p-2">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
