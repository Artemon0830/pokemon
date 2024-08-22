import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPokemonModel} from "../models/IPokemonModel";
import {IPoke} from "../models/IPoke";

let instance = axios.create({
    baseURL:baseUrl
});

const pokeService = {
    getPokemon: async (): Promise<IPoke[]> => {
        let response = await instance.get(urls.pokemon.base);
        return response.data.results;
    },
    getPokemonById: async (name:string): Promise<IPoke> => {
        let response = await instance.get<IPoke>(urls.pokemon.byId(name));
        return response.data
    }
}

export {pokeService};
