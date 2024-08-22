// src/pages/PokemonPage.tsx
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {pokemonAction} from "../redux/slice/pokemonSlice";
import PokemonComponent from "../components/PokemonComponent";
import {useAppDispatch, useAppSelector} from "../redux/hooks-redux";
import {IPoke} from "../models/IPoke";

const PokemonPage = () => {
    let {name} = useParams();
    let dispatch = useAppDispatch();
    let pokemon = useAppSelector(state => state.pokemonStore.pokemon);
    useEffect(() => {
        if (name) dispatch(pokemonAction.loadPokemon(name));
    }, [name]);


    return (
        <div>
            <h1>PokemonPage</h1>
            {pokemon && <PokemonComponent pokemon={pokemon}  />}
        </div>
    );
};

export default PokemonPage;
