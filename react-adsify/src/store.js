import { configureStore } from "@reduxjs/toolkit";
import cardDetailSlice from "./features/cardDetail/cardDetailSlice";
import cardListReducer from './features/cardList/cardListSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    cardDetail: cardDetailSlice,
  }
})

export default store;