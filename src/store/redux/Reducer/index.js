import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (
  state = { startId: 0, numberOfCards: 2, picList: Array(), numberOfPages: 0 },
  action
) => {
  switch (action.type) {
    case "widthChange":
      return {
        ...state,
        numberOfCards: action.value,
        startId:
          state.startId + action.value >= state.picList.length
            ? state.picList.length - action.value >= 0
              ? state.picList.length - action.value
              : 0
            : state.startId,
      };
    case "next":
      return {
        ...state,
        startId:
          state.startId + (action.value + 1) * state.numberOfCards >=
          state.picList.length
            ? state.picList.length - state.numberOfCards >= 0
              ? state.picList.length - state.numberOfCards
              : 0
            : state.startId + action.value * state.numberOfCards,
      };
    case "prev":
      return {
        ...state,
        startId:
          state.startId - action.value * state.numberOfCards >= 0
            ? state.startId - action.value * state.numberOfCards
            : 0,
      };
    case "nextLoad":
      if (state.picList.length < 50) {
        return {
          ...state,
          picList: state.picList.slice(0, 0).concat(action.value),
        };
      }
      return {
        ...state,
        picList: state.picList.concat(action.value),
      };
    case "addView":
      return {
        ...state,
        picList: state.picList.map((item, index) => {
          if (index !== action.value) {
            return item;
          }
          item.view_count = item.view_count + 1;
          return item;
        }),
      };
    case "addPageCount":
      return { ...state, numberOfPages: state.numberOfPages + 1 };
    case "reset":
      console.log("restarted");
      return {
        startId: 0,
        numberOfCards: 2,
        picList: Array(),
        numberOfPages: 0,
      };
    default:
      return state;
  }
};
export default persistReducer(persistConfig, rootReducer);

// export default rootReducer;
