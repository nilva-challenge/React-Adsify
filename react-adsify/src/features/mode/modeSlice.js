import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themStatus: true,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    dark: (state) => {
      state.themStatus = false;
    },
    light: (state) => {
      state.themStatus = true;
    },
  },
});

export const { dark, light } = modeSlice.actions;

export default modeSlice.reducer;
