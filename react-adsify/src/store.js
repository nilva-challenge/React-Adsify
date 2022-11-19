import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from './features/cardList/cardListSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  }
})

export default store;