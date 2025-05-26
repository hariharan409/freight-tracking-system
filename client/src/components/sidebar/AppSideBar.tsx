import useAppSideBar from "@/hooks/useAppSideBar";
import SidebarItem from "@/components/sidebar/SidebarItem";
import packageJson from "@/../package.json";
import { UserCircleIcon  } from '@heroicons/react/24/solid';
import { Separator } from "../ui/separator";


const AppSideBar = () => {
    const {menuItems} = useAppSideBar({});
    const {version} = packageJson;

    return(
        <div className="relative h-full py-3 px-1 flex flex-col">
            {/* Scrollable Menu Items */}
            <div className="overflow-auto flex-1 pr-1">
                {menuItems.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </div>

            {/* Fixed Footer */}
            <div className="mt-auto px-4 pt-4">
                <Separator orientation="horizontal" className="h-[2px] bg-red-300" />
                <div className="flex items-start gap-2 w-fit mt-1">
                    <UserCircleIcon  className="w-10 text-red-500" />
                    <div>
                        <h5 className="text-black font-bold text-sm capitalize truncate w-48">
                            harihara dhamodaran
                        </h5>
                        <h5 className="text-gray-500 font-semibold text-xs capitalize w-48">
                            admin
                        </h5>
                    </div>
                </div>
                <h5 className="uppercase text-black font-semibold text-xs text-center mt-2">
                    © 2025 seatrium digital - version v{version}
                </h5>
            </div>
        </div>
    )
}

export default AppSideBar;