import { configureStore } from "@reduxjs/toolkit";
import appSideBarReducer from "@/store/slices/appSideBarSlice";


export const store = configureStore({
    reducer: {
        appSideBar: appSideBarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;