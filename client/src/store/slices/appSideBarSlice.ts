import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants/menu";
const EXPANDED_STORAGE_KEY = "EXPANDED_MENU_ITEMS";

// helper to save the array of expanded menu identifiers
export const saveExpandedState = async <T>(expandedItems: Array<T>): Promise<void> => {
    try {
        localStorage.setItem(EXPANDED_STORAGE_KEY,JSON.stringify(expandedItems));
    } catch (error) {
        console.error("Failed to save expanded items:", error instanceof Error ? error.message : error);
    }
}

// helper to load the array of expanded menu identifiers
export const loadExpandedState = async () => {
    try {
      const stored = localStorage.getItem(EXPANDED_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to load expanded items:", error instanceof Error ? error.message : error);
      return [];
    }
  }; 

// Define the state type
type AppSideBarState = {
    menuItems: typeof MENU_ITEMS;
  };


// Initial state with correct type
const initialState: AppSideBarState = {
    menuItems: MENU_ITEMS,
};

const appSideBarSlice = createSlice({
    name: "app-nav-slice",
    initialState,
    reducers: {}
});

export default appSideBarSlice.reducer;