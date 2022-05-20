const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

let getPokemon = async () => {
  // petición
  const respuesta = await fetch(BASE_URL + '?limit=151')
  let { results } = await respuesta.json()

  // respuesta
  //   .then((info)=> info.json()) // convierto a un objeto
  //   .then((data)=> console.log(data)) // recibo la data

  let pokemons = []
  for (let pokemon of results) {
    let respuesta = await fetch(pokemon.url)
    let {id, name, sprites} = await respuesta.json()
    pokemons.push({ id, name, sprites })
  }

  return pokemons
}

export { getPokemon }
