import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks-redux";
import { pokemonAction } from "../redux/slice/pokemonSlice";
import PokemonFormComponent from "../components/PokemonFormComponent";

const FormPage = () => {
    let { name } = useParams<{ name: string }>();
    let dispatch = useAppDispatch();
    let pokemonForm = useAppSelector(state => state.pokemonStore.pokemonForm);

    useEffect(() => {
        if (name) {
            dispatch(pokemonAction.loadPokemonForm(name));
        }
    }, [dispatch, name]);

    return (
        <div>
            {pokemonForm && <PokemonFormComponent form={pokemonForm} />}
        </div>
    );
};

export default FormPage;