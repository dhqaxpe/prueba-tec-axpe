import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./utils/favoriteReducer";

export default configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
})