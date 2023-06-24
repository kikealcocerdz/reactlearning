import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const winnercombs = [
  [0,1,2], //fila 1
  [3,4,5], //fila 2
  [6,7,8], //fila 3
  [0,3,6], //columna 1
  [1,4,7], //columna 2
  [2,5,8], //columna 3
  [0,4,8], //diagonal 1
  [2,4,6], //diagonal 2
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)


  const checkEndGame = (newBoard) => {
   return newBoard.every((square) => square !== null) 
  }
  const checkWinner = (boardToCheck) => {
    for (const combo of winnercombs) {
      const [a,b,c] = combo
      if (boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] && 
      boardToCheck[a] === boardToCheck[c]
       )
       {
        return boardToCheck[a]
       }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    //casilla ocupada
    const newBoard = [...board]
    newBoard[index] = turn //X o O
    setBoard(newBoard)
    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    console.log("Turno de: ", newTurn)
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    //hemos ganao
    if (newWinner) {
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
    }

  return (
  
  <main className='board'>
  <h1>TIC TAC</h1>
  <button onClick={resetGame}>
  <img className="image" src="download.jpg"></img>
  </button>
  <section className="game">
    {
      board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
            {board[index]}
          </Square>
        )
      })
    }
  </section>
  <section className="turn">
    <Square isSelected={turn===TURNS.X}>
      {TURNS.X}
    </Square>
    <Square isSelected={turn===TURNS.O}>
      {TURNS.O}
    </Square>
  </section>

  {
    winner !== null && (
      <section className="winner">
        <div className='text'>
          <h2>
            {
              winner === false
              ? 'Empate'
              : 'Ganó:'
            }
          </h2>
        <header className='win'>
            {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}> Empezar de nuevo</button>
        </footer>
        </div>
        </section>
      )
  }
  </main>
  )
}
            

export default App
