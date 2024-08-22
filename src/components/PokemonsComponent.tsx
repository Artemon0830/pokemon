import React, {FC} from 'react';
import {IPoke} from "../models/IPoke";
import {Link} from "react-router-dom";
interface IProps {
    pokemons: IPoke[];
}
const PokemonsComponent:FC<IProps> = ({pokemons}) => {
    return (
        <div>
            <ul>
                {
                    pokemons.map(pokemon => (<li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>

                    </li>))
                }
            </ul>
        </div>
    );
};

export default PokemonsComponent;