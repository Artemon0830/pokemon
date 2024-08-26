import { createSlice } from "@reduxjs/toolkit";
import { IPoke } from "../../models/IPoke";

type FavoriteState = {
    favorites: IPoke[];
};

const initialState: FavoriteState = {
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')

};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favorites.find(pokemon => pokemon.name === action.payload.name)) {
                state.favorites.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(pokemon => pokemon.name !== action.payload.name);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
});
export const favoriteAction= {
    ...favoriteSlice.actions
}
