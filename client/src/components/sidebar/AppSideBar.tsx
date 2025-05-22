import useAppSideBar from "@/hooks/useAppSideBar";
import SidebarItem from "./SidebarItem";


const AppSideBar = () => {
    const {menuItems} = useAppSideBar({});

    return(
        <div className="h-full py-3 px-1">
            {menuItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </div>
    )
}

export default AppSideBar;