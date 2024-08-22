import {IPokemonModel} from "../models/IPokemonModel";
import {FC} from "react";
import {IPoke} from "../models/IPoke";

interface IProps {
    pokemons: IPoke[];
}

const PokemonsComponent: FC<IProps> = ({ pokemons }) => {
    return (
        <div>
            {pokemons.map(pokemon => (
                <div key={pokemon.name}>
                    {pokemon.name}
                </div>
            ))}
        </div>
    );
};

export default PokemonsComponent;