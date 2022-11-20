import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  info: [],
  id: 0,
};

const url = `https://picsum.photos/id/${initialState.id}/info`;

export const cardDetail = createAsyncThunk(
  "cardDetailSlice/cardDetail",
  async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const cardDetailSlice = createSlice({
  name: "cardDetailSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [cardDetail.fulfilled]: (state, action) => {
      state.info = action.payload;
      state.id = action.meta.arg;
    },
  },
});

export default cardDetailSlice.reducer;
