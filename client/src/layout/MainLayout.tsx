import AppHeader from "@/components/header/AppHeader";
import AppSideBar from "@/components/sidebar/AppSideBar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {

    return(
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            {/* header */}
            <header className="w-full h-header border-[1px] border-b-[rgba(0,0,0,0.3)] relative shadow-lg">
                <AppHeader />
            </header>
            <div className="h-full grid md:grid-cols-[300px_auto] overflow-hidden">
                <aside className="overflow-auto hidden md:block border-r-[1px] border-r-[rgba(0,0,0,0.3)]">
                    <AppSideBar />
                </aside>
                {/* app body */}
                <main className="h-main bg-main-bg overflow-auto p-2">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout;