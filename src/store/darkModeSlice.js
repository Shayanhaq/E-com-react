import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: true };

// functions to update state
const reducers = {
  toggleDarkMode: (state) => {
    state.darkMode = !state.darkMode;
  },
};

const darkModeSlice = createSlice({ name: "darkMode", initialState, reducers });

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;