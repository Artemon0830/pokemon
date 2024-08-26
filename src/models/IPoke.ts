import {IAbility} from "./IAbility";
import {IType} from "./IType";
import {IStats} from "./IStats";
import {IForm} from "./IForm";
import {IPokemonForm} from "./IPokemonForm";

export interface IPoke {
    name: string;
    abilities: IAbility[];
    types: IType[];
    base_experience: number;
    stats:IStats[];
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;

    };
    forms: IPokemonForm[];

}