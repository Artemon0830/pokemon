import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPokemonModel} from "../models/IPokemonModel";
import {IPoke} from "../models/IPoke";
import {IPokemonForm} from "../models/IPokemonForm";

let instance = axios.create({
    baseURL:baseUrl
});


    const pokeService = {
        getPokemon: async (limit: number, offset: number): Promise<IPokemonModel> => {
            const response = await instance.get(`pokemon?limit=${limit}&offset=${offset}`);
            return response.data;
        },
    getPokemonById: async (name:string): Promise<IPoke> => {
        let response = await instance.get<IPoke>(urls.pokemon.byId(name));
        return response.data
    },
    getPokemonForm: async (name:string): Promise<IPokemonForm> => {
        let response = await instance.get<IPokemonForm>(`pokemon-form/${name}`);
        return response.data
    },


}

export {pokeService};
