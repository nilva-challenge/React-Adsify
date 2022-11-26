import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from './features/cardList/cardListSlice';
import trackerReducer from './features/tracker/trackerSlice';
import modeReducer from './features/mode/modeSlice';
import playerReducer from './features/player/playerSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    tracker: trackerReducer,
    mode: modeReducer,
    player: playerReducer,
  }
})

export default store;