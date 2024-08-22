export const baseUrl='https://pokeapi.co/api/v2'
export const urls={
    pokemon:{
        base:'/pokemon',
        byId:(name:string):string=>urls.pokemon.base+'/'+name,
    }}