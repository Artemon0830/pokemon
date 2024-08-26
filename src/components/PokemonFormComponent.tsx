import React, {FC} from 'react';
import {IPokemonForm} from "../models/IPokemonForm";

interface IProps {
    form:IPokemonForm ;
}
const PokemonFormComponent:FC<IProps> = ({form
}) => {
    return (
        <div>
            <h2>{form.name}</h2>
            <h2>Sprites</h2>
            <img src={form.sprites.front_default} alt={form.name} />
            <img src={form.sprites.back_default} alt={form.name} />
            <img src={form.sprites.front_shiny} alt={form.name} />
            <img src={form.sprites.back_shiny} alt={form.name} />
            <h2>Types</h2>
            <ul>
                {form.types.map(type => (
                    <li key={type.type.name}>{type.type.name}
                    </li>
                ))}
            </ul>
            <h2>Version Group</h2>
            {form.version_group.name}
        </div>
    );
};

export default PokemonFormComponent;