import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPokemonModel} from "../models/IPokemonModel";

let instance = axios.create({
    baseURL:baseUrl
});

const pokeService = {
    getPokemon: async ():Promise<IPokemonModel> => {
        let response = await instance.get<IPokemonModel>(urls.pokemon.base);
        return response.data.results;
    }
}

export {pokeService};