import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./components/meetups/favoriteReducer";

export default configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
})