import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://picsum.photos/v2/list?page=2&limit=100";

export const cardList = createAsyncThunk("dashSlice/getList", async () => {
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
};

const cardListSlice = createSlice({
  name: "cardListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [cardList.fulfilled] : (state, action) => {
      state.data = action.payload;
    }
  }
});

export default cardListSlice.reducer;
