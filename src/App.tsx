import './App.css'
import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { GameBoard } from './Components/GameBoard'
import { CharacterSelect } from './Components/CharacterSelect'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  }

  const characterChoice = () => {
    setSelectCharacter(true);
  }

  const tryAgain = () => {
    setGameStarted(false);
    setSelectCharacter(false);
  }

  return (
    <main className="bg-[#f8f1fc] flex flex-col w-full min-h-screen">

      <Navbar />

      <header className='bg-transparent'>
        <div className='container mx-auto'>
          <h1 className='animate-[text] text-center mt-30 bg-gradient-to-r bg-clip-text text-transparent 
            from-[#e79995] via-[#da935d] to-[#9a3bd2]'>
            Snake Game
          </h1>
        </div>
      </header>

      <div className="flex-grow">

        {!selectCharacter && (
          <div className="flex justify-center mt-4">
            <button
              onClick={characterChoice}
              id="Choose a Character"
              className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded"
            >
              Choose a Character
            </button>
          </div>
        )}

        {selectCharacter && !gameStarted && (
          <CharacterSelect />
        )}

        {selectCharacter && !gameStarted && (
          <div className="flex justify-center mt-4">
            <button
              onClick={startGame}
              id="Start Game"
              className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded"
            >
              Start Game!
            </button>
          </div>
        )}

        {gameStarted && (
          <div className="relative flex justify-center mt-4">
            <GameBoard />
          </div>
        )}

        {gameStarted && (
          <div className="flex justify-center mt-4">
            <button
              onClick={tryAgain}
              id="tryAgain"
              className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default App;
