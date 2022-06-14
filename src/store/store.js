import { configureStore } from '@reduxjs/toolkit'
import changeState from "./reducer"
export default configureStore({
    reducer: {search: changeState},
})