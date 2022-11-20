import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    dark: (state) => {
      state.status = false;
    },
    light: (state) => {
      state.status = true;
    },
  },
});

export const { dark, light } = modeSlice.actions;

export default modeSlice.reducer;
