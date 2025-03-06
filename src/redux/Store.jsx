// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import taskReducer from "./TaskSlice";
import themeReducer from "./ThemeSlice";
import uiReducer from "./uiSlice";
import weatherReducer from "./weatherSlice";  // Import the weather reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    theme: themeReducer,
    ui: uiReducer,
    weather: weatherReducer,  // Add the weather reducer under the key 'weather'
  },
});

export default store;
 