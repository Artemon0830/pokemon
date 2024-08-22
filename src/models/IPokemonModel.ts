import {IPoke} from "./IPoke";

export interface IPokemonModel{
    results: IPoke[];
    cries:{
     latest: string;
     legacy: string;
    }

}