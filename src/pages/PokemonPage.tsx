import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {pokemonAction} from "../redux/slice/pokemonSlice";
import PokemonComponent from "../components/PokemonComponent";
import {useAppDispatch, useAppSelector} from "../redux/hooks-redux";
import {favoriteAction} from "../redux/slice/favoriteSlice";

const PokemonPage = () => {
    let {name} = useParams();
    let dispatch = useAppDispatch();
    let pokemon = useAppSelector(state => state.pokemonStore.pokemon);
    useEffect(() => {
        if (name) dispatch(pokemonAction.loadPokemon(name));
    }, [name]);
    const addFavorite = () => {
        if (pokemon) {
            dispatch(favoriteAction.addFavorite(pokemon));
        }
    }
    const removeFavorite = () => {
        dispatch(favoriteAction.removeFavorite(pokemon));
    }
    return (
        <div>
            <h1>{pokemon && pokemon.name}</h1>
            {pokemon && <PokemonComponent pokemon={pokemon}  />}
            <button onClick={addFavorite}>Add to Favorite</button>
            <button onClick={removeFavorite}>Remove from Favorite</button>
        </div>
    );
};

export default PokemonPage;
