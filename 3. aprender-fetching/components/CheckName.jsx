import { Square } from './Square.jsx'

export const CheckName = ({ correct }) => {
  const winnerText = correct === 1 ? 'You are correct!' : 'You are wrong!'
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>
          You are correct!
        </header>
        <Square>Correcto</Square>
        <footer>
          <button>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
