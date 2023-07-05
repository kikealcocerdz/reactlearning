import './App.css'
import './index.css'
import { CheckName } from '../components/CheckName.jsx'
import { useRef, useState } from 'react'
import { PokemonInfo } from '../components/pokemon.jsx'

export function App () {
  console.log()

  return (
    <div>
      <PokemonInfo />
    </div>
  )
}
