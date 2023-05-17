// https://unpkg.com/pokemons@1.1.0/pokemons.json
//with this link I get all the pokemons

export async function fetchPokemons() {
    const response = await fetch('https://unpkg.com/pokemons/pokemons.json');
    
    if (!response.ok) {
        throw new Error(response.statusText);
        }
 
    const result = await response.json();
8
    const pokemons = result.map((pokemon: any) => ({
        id: pokemon.national_numer,
        name: pokemon.name,
        imgSrc: 'https://img.pokemondb.net/artwork/large/${formatPokemonName}(pokemon.name).gif',

    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) => {
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index;
        }
    );

    return uniquePokemons;
}