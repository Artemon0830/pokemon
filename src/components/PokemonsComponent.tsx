// src/components/PokemonsComponent.tsx
import React, { FC } from 'react';
import { IPoke } from "../models/IPoke";
import { Link } from "react-router-dom";
import styles from './../css/PokemonsComponent.module.css';

interface IProps {
    pokemons: IPoke[];
}

const PokemonsComponent: FC<IProps> = ({ pokemons }) => {
    return (
        <div className={styles.pokemonList}>
            {pokemons.map(pokemon => (
                <div key={pokemon.name} className={styles.pokemonItem}>
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <img
                            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                            alt={pokemon.name}
                            className={styles.pokemonImage}
                        />
                        {pokemon.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PokemonsComponent;