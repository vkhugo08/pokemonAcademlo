import { renderPokemons } from './components/renderPokemons.js'
import {catchPokemon, renderMochila, removerPokemon} from './components/mochila.js'

document.addEventListener('DOMContentLoaded', () => {
  renderPokemons()
  renderMochila()
})

content.addEventListener('click', (e)=> {
  if(e.target.matches('.card__add-btn')) {
    catchPokemon(+e.target.dataset.id)
  }
})

sidebar.addEventListener('click', (e)=> {
  if(e.target.matches('.card__remove-btn')) {
    removerPokemon(+e.target.dataset.id)
  }
})