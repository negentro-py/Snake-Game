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
  return (
    <main className="bg-[#f8f1fc] flex flex-col w-full min-h-screen">
      <Navbar />
      <header className='bg-transparent'>
        <div className='container mx-auto'>
          <h1 className='text-center text-[#0f0516] text-6xl font-extrabold  mt-30'> Snake Game </h1>
        </div>
      </header>

      <div className="flex-grow">
        {selectCharacter ? (
          <CharacterSelect />
        ) : (
          <div className="flex justify-center mt-4">
            <button
              onClick={characterChoice}
              id="Choose a Character"
              className="bg-[#e79995] text-white py-2 px-4 rounded"
            >
              Choose a Character
            </button>

          </div>
        )
        }
        {gameStarted && selectCharacter ? (
          <GameBoard />
        ) : (
          <div className="flex justify-center mt-4">
            <button
              onClick={startGame}
              id="Start Game"
              className="bg-[#e79995] text-white py-2 px-4 rounded"
            >
              Start Game!
            </button>


          </div>
        )
        }

      </div>
    </main>

  )
}

export default App
