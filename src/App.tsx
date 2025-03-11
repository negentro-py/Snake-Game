
import './App.css';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { GameBoard } from './Components/GameBoard';
import { CharacterSelect } from './Components/CharacterSelect';
import { ScoreBoard } from './Components/ScoreBoard';
import { Settings } from './Components/Settings'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<{ name: string, imageSrc: string } | null>(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const characterChoice = () => {
    setSelectCharacter(true);
  };

  const tryAgain = () => {
    setGameStarted(false);
    setSelectCharacter(false);
    setSelectedCharacter(null);
    setGameEnded(false);
    setScore(0);
  };

  const handleGameEnd = () => {
    setGameEnded(true);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <main className="bg-gradient-to-b from-[#f8f1fc] to-[#e79995] flex flex-col w-full min-h-screen">
      <Navbar />
      <Settings />

      <header className='bg-transparent'>
        <div className='container mx-auto'>
          <h1 className='animate-text text-center mt-30 bg-gradient-to-r bg-clip-text text-transparent 
                        from-[#e79995] via-[#da935d] to-[#9a3bd2]'>
            Snake Game
          </h1>
        </div>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center">
        {!selectCharacter && (
          <div className="flex justify-center mt-4">
            <button
              onClick={characterChoice}
              id="Choose a Character"
              className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded"
            >
              <h3>Choose a Character</h3>
            </button>
          </div>
        )}

        {selectCharacter && !gameStarted && (
          <CharacterSelect
            setGameStarted={setGameStarted}
            setSelectedCharacter={setSelectedCharacter}
          />
        )}

        {gameStarted && selectedCharacter && !gameEnded && (
          <div className="flex flex-col items-center space-y-8">
            {/* Game Board */}
            <GameBoard
              selectedCharacter={selectedCharacter}
              onGameEnd={handleGameEnd}
              setScore={setScore}
            />
          </div>
        )}

        {/* ScoreBoard (only shown when game ends) */}
        {gameEnded && (
          <div className="flex flex-col items-center space-y-8">
            <ScoreBoard score={score} highScore={highScore} />
            <button
              onClick={tryAgain}
              id="tryAgain"
              className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded"
            >
              <h3>Try Again</h3>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;

