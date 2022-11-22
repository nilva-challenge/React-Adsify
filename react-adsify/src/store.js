import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from './features/cardList/cardListSlice';
import trackerReducer from './features/tracker/trackerSlice';
import modeReducer from './features/mode/modeSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    tracker: trackerReducer,
    mode: modeReducer,
  }
})

export default store;