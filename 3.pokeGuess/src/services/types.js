const separator = '-'
const POKEMON_ABILITY = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`

export const getPokemonTypes = async () => {
  const res = await fetch(POKEMON_ABILITY)
  const data = await res.json()
  const types = data.types.map(t => t.type.name).join(separator)
  const words = types.split(separator)
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const result = capitalizedWords.join(separator)
  return result
}
