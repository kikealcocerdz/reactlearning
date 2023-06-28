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
  <WinnerModal winner={winner} resetGame={resetGame}/>
  </main>
  )
}
            

export default App
