import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks-redux";
import PokemonsComponent from "../components/PokemonsComponent";
import {pokemonAction} from "../redux/slice/pokemonSlice";


const PokemonPage = () => {
    let dispatch = useAppDispatch();
    let { pokemons } = useAppSelector(state => state.pokemonStore);
    useEffect(() => {
        dispatch(pokemonAction.loadPokemon());
    }, []);
    return (
        <div>
            <PokemonsComponent pokemons={pokemons} />
        </div>
    );
};

export default PokemonPage;