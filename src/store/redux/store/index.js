import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "../Reducer";

const middleware = [logger];
// export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export default { store, persistor };

// export default store;
