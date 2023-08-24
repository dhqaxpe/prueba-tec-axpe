import { createSlice } from "@reduxjs/toolkit";

export const favoriteReducer = createSlice({
    name: 'favorites',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            if (state.value.indexOf(action.payload) === -1)
                state.value = [...state.value, action.payload]
        },
        remove: (state, action) => {
            state.value = state.value.filter((v) => v !== action.payload)
        }
    }
})

export const {add, remove} = favoriteReducer.actions
export default favoriteReducer.reducer