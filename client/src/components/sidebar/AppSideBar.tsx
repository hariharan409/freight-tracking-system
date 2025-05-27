import { ChevronLeft, ChevronRight } from "lucide-react";
import useAppSideBar from "@/hooks/useAppSideBar";
import SidebarItem from "@/components/sidebar/SidebarItem";
import packageJson from "@/../package.json";
import { Separator } from "@/components/ui/separator";

interface AppSideBarProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const AppSideBar = ({ collapsed, toggleCollapsed }: AppSideBarProps) => {
    const { menuItems } = useAppSideBar({});
    const { version } = packageJson;

    return (
        <div className={`h-full py-2 flex flex-col bg-white shadow-lg transition-all duration-300`}>
            {/* Toggle Button */}
            <div className="flex justify-end mb-2">
                <button onClick={toggleCollapsed} className="p-1 hover:bg-gray-100 rounded">
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Menu Items */}
            <div className="overflow-auto flex-1 pr-1">
                {menuItems.map((item: any, index: number) => (
                    <SidebarItem key={index} item={item} collapsed={collapsed} />
                ))}
            </div>

            {/* Footer */}
            <div className={`mt-auto ${collapsed ? "text-center px-2" : "px-4 pt-4"}`}>
                <Separator orientation="horizontal" className="h-[2px] bg-red-300" />
                {!collapsed && (
                    <h5 className="uppercase text-black font-semibold text-xs text-center mt-2">
                        © 2025 seatrium digital - version v{version}
                    </h5>
                )}
            </div>
        </div>
    );
};

export default AppSideBar;
