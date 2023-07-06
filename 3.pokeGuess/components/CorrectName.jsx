export const CorrectName = ({ correct, resetGame }) => {
  const winnerText = 'You are correct!'
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <form>
          <button onClick={resetGame}>Next pokemon</button>
        </form>
      </div>
    </section>
  )
}
