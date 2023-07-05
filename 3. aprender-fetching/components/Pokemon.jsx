import { GenerateRandom } from '../logic/random_number'
import { useEffect, useState, useRef } from 'react'
import { CheckName } from './CheckName.jsx'
const separator = '-'

export function PokemonInfo () {
  const inputRef = useRef()
  const [pokemonId, setPokemonId] = useState(GenerateRandom())
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState()
  const [type, setType] = useState('No abilities for this pokemon')
  const [win, setWin] = useState(false)
  const verifyName = () => {
    const value = inputRef.current.value
    console.log(value)
    console.log(pokemonName)
    if (value.toUpperCase() === { pokemonName }.toUppercase()) {
      console.log(pokemonName)
      console.log(value)
      const newWin = 1
      console.log(newWin)
      setWin(newWin)
    }
    return win
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data =>
        setPokemonName(data.name[0].toUpperCase() + data.name.slice(1))
      )
  }, [pokemonId])

  useEffect(() => {
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
    const newPokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    setPokemonImage(newPokemonImage)
  }, [pokemonId])

  const handleClickPokemon = () => {
    const newPokemonId = GenerateRandom()
    setPokemonId(newPokemonId)
  }

  return (
    <div>
      <header className='page'>
        <h1>PokeGuess</h1>
        <div className='page'>
          <img src={pokemonImage} alt={`Image extracted for ${pokemonId}`} />
          {pokemonId && <p>{type}, {pokemonName}</p>}
        </div>
        <button className='button' onClick={handleClickPokemon}> Pass </button>
      </header>
      <main>
        <label>
          Name of the pokemon:
          <form className='form'>
            <input ref={inputRef} placeholder='Charizard, Blastoise' />
            <button onClick={verifyName} className='button'> Check </button>
          </form>
        </label>
      </main>
      {win === 1 ? <CheckName correct={win} /> : <p>mal</p>}
    </div>
  )
}
