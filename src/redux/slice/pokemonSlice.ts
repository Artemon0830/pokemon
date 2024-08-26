import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pokeService } from "../../services/api.service";
import { AxiosError } from "axios";
import { IPoke } from "../../models/IPoke";
import {IPokemonForm} from "../../models/IPokemonForm";

type PokemonTypeSlice = {
    pokemons: IPoke[];
    pokemon: IPoke | null;
    currentPage: number;
    totalPages: number;
    limit: number;
    count: number;
    next: string | null;
    previous: string | null;
    pokemonForm: IPokemonForm | null;

}

let initState: PokemonTypeSlice = {
    pokemons: [],
    pokemon: null,
    currentPage: 1,
    totalPages: 0,
    limit: 20,
    count: 0,
    next: null,
    previous: null,
    pokemonForm: null,

}

let loadPokemons = createAsyncThunk('pokemonSlice/loadPokemon', async ({ limit, offset }: { limit: number, offset: number }, thunkAPI) => {
    try {
        let response = await pokeService.getPokemon(limit, offset);
        return thunkAPI.fulfillWithValue(response);
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
let loadPokemonForm = createAsyncThunk('pokemonSlice/loadPokemonForm', async (name: string, thunkAPI) => {
    try {
        let pokemonForm = await pokeService.getPokemonForm(name);
        return thunkAPI.fulfillWithValue(pokemonForm);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }

})

export const pokemonSlice = createSlice({
    name: 'pokemonSliceName',
    initialState: initState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload.results;
            state.count = action.payload.count;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.totalPages = Math.ceil(action.payload.count / state.limit);
        })
        .addCase(loadPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload;
        })
        .addCase(loadPokemonForm.fulfilled,(state, action)=>{
            state.pokemonForm = action.payload;
        })

})

export const { setCurrentPage } = pokemonSlice.actions;
export const pokemonAction = {
    loadPokemons,
    loadPokemon,
    loadPokemonForm
}


