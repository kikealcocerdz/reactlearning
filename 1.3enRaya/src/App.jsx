import { useState } from 'react'
import confetti from 'canvas-confetti'

import {TURNS, winnercombs} from './constants.js'
import {WinnerModal} from './components/WinnerModal.jsx'
import {Square} from './components/Square.jsx'



function App() {
  const [board, setBoard] = useState(()=> {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=> {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) return JSON.parse(turnFromStorage)
    return TURNS.X 
  })
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
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    const newWinner = checkWinner(newBoard)
    //hemos ganao
    if (newWinner) {
      confetti()
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
  <img className="image" src="data:image/jpeg;base64,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"></img>
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
  <WinnerModal winner={winner} resetGame={resetGame}/>
  </main>
  )
}
            

export default App
