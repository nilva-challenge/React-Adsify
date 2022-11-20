import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const trackerSlice = createSlice({
  name: "trackerSlice",
  initialState,
  reducers: {
    counter: (state) => {
      state.count += 1
    }
  }
})

export const {counter} = trackerSlice.actions;


export default trackerSlice.reducer;