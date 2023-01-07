import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://picsum.photos/v2/list?page=2&limit=100";

export const cardList = createAsyncThunk("cardListSlice/cardList", async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  data: [],
  transformX: 0,
  carouselLength: 620,
};

const cardListSlice = createSlice({
  name: "cardListSlice",
  initialState,
  reducers: {
    next: (state) => {
      state.transformX >= state.carouselLength
        ? (state.transformX = 0)
        : (state.transformX += 60);
    },
    prev: (state) => {
      state.transformX <= 0
        ? (state.transformX = state.carouselLength)
        : (state.transformX -= 60);
    },
  },
  extraReducers: {
    [cardList.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { next, prev } = cardListSlice.actions;

export default cardListSlice.reducer;
