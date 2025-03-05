import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import taskReducer from "./TaskSlice";
import themeReducer from "./ThemeSlice";
import uiReducer from "./UiSlice";  // Sidebar state

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    theme: themeReducer,
    ui: uiReducer,  // Added UI slice for sidebar control
  },
});

export default store;
