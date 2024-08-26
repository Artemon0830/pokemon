import {IPoke} from "./IPoke";

export interface IPokemonModel{
    count: number;
    next: string;
    previous: string;
    results: IPoke[];
}