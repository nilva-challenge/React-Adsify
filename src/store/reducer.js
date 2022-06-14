import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        sidebarItem: 1,
        detailCounter:0 ,
        }
        export const changeState = createSlice({
            name: 'searchState', initialState, reducers: {
            changeSidebarItem: (state, action) => {
            state.sidebarItem = action.payload
        },
            changeDetailCounter: (state, action) => {
            state.detailCounter = action.payload
        },
        }
        });
        export const { changeSidebarItem, changeDetailCounter } = changeState.actions;
        export default changeState.reducer;