 export const baseUrl='https://pokeapi.co/api/v2'
export const urls={
    pokemon:{
        base:'/pokemon?limit=20&offset=0',
        byId:(id:number):string=>urls.pokemon.base+'/'+id,
    }}