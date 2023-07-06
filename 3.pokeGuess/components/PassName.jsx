export const PassName = ({ correct, resetGame }) => {
  const winnerText = 'You failed!'
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
