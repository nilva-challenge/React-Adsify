
import { createStore } from 'redux'
import { redusers } from '../reducers';
// import { trackReducer } from "../reducers/trackVideo";
export const store = createStore(
    redusers
)
store.subscribe(() => console.log(store.getState()))