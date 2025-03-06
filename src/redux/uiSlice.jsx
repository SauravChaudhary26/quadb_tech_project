// src/redux/UiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSidebarOpen: true,
    view: "grid", // or "list"
    filter: "all", // possible values: "all", "today", "important", "planned", "assigned"
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { toggleSidebar, setView, setFilter } = uiSlice.actions;
export default uiSlice.reducer;
