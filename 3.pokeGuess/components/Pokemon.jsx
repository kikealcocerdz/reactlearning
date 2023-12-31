import { GenerateRandom } from '../logic/random_number'
import { useEffect, useState, useRef } from 'react'
import { CorrectName } from './CorrectName.jsx'
import { PassName } from './PassName.jsx'
const separator = '-'

export function PokemonInfo () {
  const inputRef = useRef()
  const [pokemonId, setPokemonId] = useState(GenerateRandom())
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState()
  const [type, setType] = useState('No abilities for this pokemon')
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const verifyName = () => {
    const input = inputRef.current.value
    const inputCapitalized = input[0].toUpperCase() + input.slice(1)
    if (inputCapitalized === pokemonName) {
      counter.current++
      setWin(true)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    verifyName()
  }

  const counter = useRef(0)

  const resetGame = () => {
    setPokemonId(GenerateRandom())
    setPokemonName('')
    setPokemonImage()
    setType('No abilities for this pokemon')
    inputRef.current.value = ''
    setWin(false)
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
    inputRef.current.value = ''
    counter.current = 0
    setLose(true)
  }

  return (
    <li className='page'>
      <header className='page'>
        <h1 className='card'>PokeGuess</h1>
        <h2>Score: {counter.current}</h2>
        <div className='page'>
          <img src={pokemonImage} alt={`Image extracted for ${pokemonId}`} />
          {pokemonId && <p>{type}</p>}
        </div>
        <button className='pass' onClick={handleClickPokemon}> Pass </button>
      </header>
      <main className='main'>
        <label>
          Name of the pokemon:
          <form className='form' onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder='Charizard, Blastoise' />
            <button className='button' type='submit'> Check </button>
          </form>
        </label>
      </main>
      {console.log(counter)}
      {win && <CorrectName correct={win} resetGame={resetGame} />}
      {lose && <PassName correct={lose} resetGame={resetGame} />}
    </li>
  )
}
