import React, {FC} from 'react';
import {IPoke} from "../models/IPoke";

interface IProps {
    pokemon: IPoke;

}
const PokemonComponent:FC<IProps> = ({pokemon}) => {
    return (
        <div>
            {pokemon.cries.latest}
            {pokemon.cries.legacy}
        </div>
    );
};

export default PokemonComponent;