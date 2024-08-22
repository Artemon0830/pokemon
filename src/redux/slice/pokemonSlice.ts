import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemonModel } from "../../models/IPokemonModel";
import { pokeService } from "../../services/api.service";
import { AxiosError } from "axios";

type PokemonTypeSlice = {
    pokemons: IPokemonModel[];
}

let initState: PokemonTypeSlice = {
    pokemons: []
}

let loadPokemon = createAsyncThunk<IPokemonModel[]>('pokemonSlice/loadPokemon', async (_, thunkAPI) => {
    try {
        let pokemons = await pokeService.getPokemon();
        return thunkAPI.fulfillWithValue(pokemons);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
})

export const pokemonSlice = createSlice({
    name: 'pokemonSliceName',
    initialState: initState,
    reducers: {
        fillPokemon: (state, action) => {
            state.pokemons = action.payload;
        }
    },
    extraReducers: builder => builder.addCase(loadPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload;
    })
})

export const pokemonAction = {
    ...pokemonSlice.actions,
    loadPokemon
}
