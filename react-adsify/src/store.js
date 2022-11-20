import { configureStore } from "@reduxjs/toolkit";
import cardDetailSlice from "./features/cardDetail/cardDetailSlice";
import cardListReducer from './features/cardList/cardListSlice';
import trackerReducer from './features/tracker/trackerSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    cardDetail: cardDetailSlice,
    tracker: trackerReducer,
  }
})

export default store;