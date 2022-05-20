import { getPokemon } from "./getPokemons.js"

let mochila = []

let catchPokemon = async (id) => {
  let pokemons = await getPokemon()
  let isPokemonCaught = mochila.find((pokemon)=> pokemon.id === id)
  if (!isPokemonCaught) {
    let pokemon = pokemons.find((pokemon)=> pokemon.id === id)
    mochila.push(pokemon)
  } else {
    alert('El pokemon ya esta en tu mochila')
  }
  renderMochila()
}

let removerPokemon = (id) => {
  mochila = mochila.filter((pokemon)=> pokemon.id !== id)
  renderMochila()
}

let renderMochila = () => {
  let html = ''
  for(let pokemon of mochila) {
    html += `
    <div class="card">
    <div class="card__container">
    <div class="card__image">
    <img src="${pokemon.sprites?.front_default}" alt="${pokemon.name}">
    </div>
    <div class="card__name">${pokemon.name}</div>
    <div class="card__add">
      <button class="card__remove-btn" data-id="${pokemon.id}">Liberar</button>
    </div>
    </div>
    </div>
    `
  }
  sidebar.innerHTML = html
}

export { catchPokemon, renderMochila, removerPokemon }