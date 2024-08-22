import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemonModel } from "../../models/IPokemonModel";
import { pokeService } from "../../services/api.service";
import { AxiosError } from "axios";
import {IPoke} from "../../models/IPoke";

type PokemonTypeSlice = {
    pokemons: IPoke[];
    pokemon: IPoke | null;
}

let initState: PokemonTypeSlice = {
    pokemons: [],
    pokemon: null
}

let loadPokemons = createAsyncThunk('pokemonSlice/loadPokemon', async (_, thunkAPI) => {
    try {
        let pokemons = await pokeService.getPokemon();
        return thunkAPI.fulfillWithValue(pokemons);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
})
let loadPokemon = createAsyncThunk('pokemonSlice/loadPokemonById', async (name: string, thunkAPI) => {
    try {
        let pokemon = await pokeService.getPokemonById(name);
        return thunkAPI.fulfillWithValue(pokemon);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
})

export const pokemonSlice = createSlice({
    name: 'pokemonSliceName',
    initialState: initState,
    reducers: {
        fillPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        fillPokemon: (state, action) => {
            state.pokemon = action.payload;
        }

    },
    extraReducers: builder => builder.addCase(loadPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
    })
        .addCase(loadPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload;
        })

})

export const pokemonAction = {
    ...pokemonSlice.actions,
    loadPokemons,
    loadPokemon
}
