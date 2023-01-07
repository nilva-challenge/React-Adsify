import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idPlayer: 100,
  playStatus: true,
};

const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    PlayerIdController: (state, action) => {
      state.idPlayer = action.payload;
    },
    StatusHandler: (state, action) => {
      state.playStatus = action.payload;
    },
    ForwardHandler: (state) => {
      state.idPlayer += 1;
    },
    BackwardHandler: (state) => {
      state.idPlayer -= 1;
    },
  },
});

export const {
  PlayerIdController,
  StatusHandler,
  ForwardHandler,
  BackwardHandler,
  PauseHandler,
} = playerSlice.actions;

export default playerSlice.reducer;
