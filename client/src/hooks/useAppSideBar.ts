import {useAppSelector} from "@/hooks/redux";
import { MenuItem } from "@/constants/menu";
import useAppRouter from "./useAppRouter";
import { useEffect, useState } from "react";
import { loadExpandedState,saveExpandedState } from '@/store/slices/appSideBarSlice';

type SidebarItemProps = {
    item?: MenuItem,
    level?: number
}

const useAppSideBar = ({item}:SidebarItemProps) => {
    const [open, setOpen] = useState(false);
    const { menuItems } = useAppSelector((state) => state.appSideBar);
    const {navigate} = useAppRouter();
    const hasChildren = item?.children && item.children.length > 0;

    // on mount, for parent menus check if they should be expanded from storage.
    useEffect(() => {
        if(hasChildren) {
            loadExpandedState().then((expandedItems) => {
                if(expandedItems.includes(item.label)) {
                    setOpen(!open);
                }
            });    
        }
    },[]);

    const handlePress = (navLink: string, params?: any): void => {
        if (hasChildren) {
            setOpen(!open);
            // update the persisted expanded state.
            loadExpandedState().then((expandedItems) => {
                const index = expandedItems.indexOf(item.label);
                index === -1 ? expandedItems.push(item.label) : expandedItems.splice(index,1);
                saveExpandedState(expandedItems);
            })
        } else {
            navigate(navLink);
        }
    };

    return {
        menuItems,
        handlePress,
        open,
        hasChildren
    }
}

export default useAppSideBar;