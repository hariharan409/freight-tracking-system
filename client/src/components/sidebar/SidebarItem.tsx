import { MenuItem } from "@/constants/menu";
import useAppRouter from "@/hooks/useAppRouter";
import useAppSideBar from "@/hooks/useAppSideBar";
import clsx from "clsx";
import { ChevronDownIcon,ChevronRightIcon } from '@heroicons/react/24/solid';

type SidebarItemProps = {
    item: MenuItem,
    level?: number
}

const SidebarItem = ({ item, level = 0 }:SidebarItemProps) => {
    const {pathname} = useAppRouter();
    const {open,handlePress,hasChildren} = useAppSideBar({item, level:0});

    return(
        <>
            <div className={clsx("h-8 mb-1 flex items-center gap-2 cursor-pointer px-2 py-5",pathname === item.navLink ? "bg-primary-gradient text-white border-[1px]" : "bg-sidebar-nav-bg hover:bg-sidebar-nav-bg-hover text-black","border-[1px]")} onClick={() => handlePress(item.navLink,item.param)}>
                {level === 0 && <div className={clsx("h-6 w-1",pathname === item.navLink ? "bg-white" : "bg-black")} />}
                <div className="transform min-w-5">{item.icon()}</div>
                <span className="capitalize font-medium truncate" title={item.label}>{item.label}</span>
                {hasChildren && (open ? <ChevronDownIcon className="w-5 h-5 ml-auto" /> : <ChevronRightIcon className="w-5 h-5 ml-auto" />)}
            </div>
            {hasChildren && open && (
                <div className="ml-2">
                    {item.children?.map((child,idx) => (
                        <SidebarItem key={idx} item={child} level={level + 1} />
                    ))}
                </div>
            )

            }
        </>
    )
}

export default SidebarItem;