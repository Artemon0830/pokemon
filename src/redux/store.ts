import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "./slice/pokemonSlice";
import {favoriteSlice} from "./slice/favoriteSlice";

export const store = configureStore({
    reducer:{
        pokemonStore: pokemonSlice.reducer,
        favoriteStore: favoriteSlice.reducer
    }
});
