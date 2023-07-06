import './App.css'
import './index.css'
import { PokemonInfo } from '../components/pokemon.jsx'

export function App () {
  console.log()

  return (
    <div>
      <PokemonInfo />
      <footer>
        <p>Created by <a href='https://github.com/kikealcocerdz'>kikealcocerdz</a></p>
      </footer>
    </div>
  )
}
