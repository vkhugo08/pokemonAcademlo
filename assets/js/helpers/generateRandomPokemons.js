import { getPokemon } from '../components/getPokemons.js'

let generateRandomPokemons = async () => {
  let pokemons = await getPokemon()
  return pokemons.sort(()=> Math.random() - 0.5)
}

export { generateRandomPokemons }