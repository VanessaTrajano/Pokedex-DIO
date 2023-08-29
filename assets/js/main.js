const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
let offset = 0
const limit = 12
const maxRecords = 144


function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join("")
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit

    var qntRecordsNextPage = offset + limit

    if(qntRecordsNextPage > maxRecords){
        const newLimit = qntRecordsNextPage - maxRecords
        loadPokemonItems(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }
})