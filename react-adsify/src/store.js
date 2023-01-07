import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardListReducer from "./features/cardList/cardListSlice";
import trackerReducer from "./features/tracker/trackerSlice";
import modeReducer from "./features/mode/modeSlice";
import playerReducer from "./features/player/playerSlice";
import { videoListApi } from "./features/cardList/videoListApi";

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    tracker: trackerReducer,
    mode: modeReducer,
    player: playerReducer,
    [videoListApi.reducerPath]: videoListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoListApi.middleware),
});

export default store;
