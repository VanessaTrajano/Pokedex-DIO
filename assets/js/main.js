const offset = 0
const limit = 12

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://upload.wikimedia.org/wikipedia/sh/thumb/4/43/Bulbasaur.png/1200px-Bulbasaur.png"
                    alt="Bulbasaur">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById("pokemonList")

// promessa:
fetch(url)
    //parecido com a estrutura try catch:
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
            
        }
    })
    //then => try - ele tentará realizar isso.
    .catch((error) => console.error(error))
    //catch(error) - caso der erro, ele realiza isso.