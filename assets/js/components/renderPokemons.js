import { generateRandomPokemons } from '../helpers/generateRandomPokemons.js'

let renderPokemons = async () => {
  let pokemons = await generateRandomPokemons()
  console.log(pokemons)
  let html = ''
  for (let pokemon of pokemons) {
    html += `
    <div class="card">
    <div class="card__container">
    <div class="card__image">
    <img src="${pokemon.sprites?.front_default}" alt="${pokemon.name}">
    </div>
    <div class="card__name">${pokemon.name}</div>
    <div class="card__add">
      <button class="card__add-btn" data-id="${pokemon.id}">Catch</button>
    </div>
    </div>
    </div>
    `
  }
  content.insertAdjacentHTML('beforeend', html)
}

export { renderPokemons }