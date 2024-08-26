
import React, { FC } from 'react';
import { IPoke } from "../models/IPoke";
import { Link } from "react-router-dom";


interface IProps {
    pokemon: IPoke;
}

const PokemonComponent: FC<IProps> = ({ pokemon }) => {
    return (
        <div >
            <img src={pokemon.sprites.front_default} alt={pokemon.name}  />
            <img src={pokemon.sprites.back_default} alt={pokemon.name}  />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name}  />
            <img src={pokemon.sprites.back_shiny} alt={pokemon.name}  />
            <h2>Base Stats</h2>
            <p>{pokemon.base_experience}</p>
            <h2>Abilities</h2>
            <ul >
                {pokemon.abilities.map(ability => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
            <h2>Stats</h2>
            <ul >
                {pokemon.stats.map(stat => (
                    <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
            <h2>Types</h2>
            <ul >
                {pokemon.types.map(type => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
            <h2>Forms</h2>
            <ul >
                {pokemon.forms.map(form => (
                    <li key={form.name}>
                        <Link to={`/pokemon/${pokemon.name}/form/${form.name}`}>{form.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonComponent;