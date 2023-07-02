import { useEffect, useState } from 'react'
import { GenerateRandom } from '../logic/random_number'
import './App.css'
// import { toCamelCase } from '../logic/camelCase'

const separator = '-'

export function App () {
  const [pokemonId, setPokemonId] = useState(GenerateRandom())
  // const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState()
  const [type, setType] = useState('No abilities for this pokemon')

  const getPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => {
        // setPokemonName(data.name)
      })
  }

  const getPokemonTypes = () => {
    const POKEMON_ABILITY = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    fetch(POKEMON_ABILITY)
      .then(res => res.json())
      .then(data => setType(
        () => {
          const types = data.types.map(t => t.type.name).join(separator)
          const words = types.split(separator)
          const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
          const result = capitalizedWords.join(separator)
          return result
        }))
  }

  const nextPokemon = () => {
    const newPokemonId = GenerateRandom()
    setPokemonId(newPokemonId)
  }

  const getPokemonImage = () => {
    const newPokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    setPokemonImage(newPokemonImage)
  }

  // retrieve pokemon data
  useEffect(() => {
    getPokemonData()
  }, [])

  useEffect(() => {
    getPokemonImage()
    getPokemonTypes()
  }, [pokemonId])

  return (
    <main>
      <h1>PokeGuess</h1>
      <section>
        <img src={pokemonImage} alt={`Image extracted for ${pokemonId}`} />
        {pokemonId && <p>{type}</p>}
      </section>
      <button onClick={nextPokemon}>Next Pokemon</button>
    </main>
  )
}
