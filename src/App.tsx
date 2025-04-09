import './App.css';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { GameBoard } from './Components/GameBoard';
import { CharacterSelect } from './Components/CharacterSelect';
import { ScoreBoard } from './Components/ScoreBoard';
import { Settings } from './Components/Settings';
import { Profile } from './Components/Profile'; // Import the Profile component

export const backendUrl = "http://localhost:3000";

export type User = { email: string; name: string; picture: string; token: string; }

interface LeaderboardEntry {
  username: string;
  score: number;
}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectCharacter, setSelectCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<{ name: string, imageSrc: string } | null>(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to control Profile popup
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]); // State to store leaderboard data
  const [user, setUser] = useState<User | null>(null); // Store user information

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

  const handleGameEnd = async () => {
    setGameEnded(true);

    if (!user) return;

    const userResponse = await fetch(`${backendUrl}/me`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });

    const fetchedUser = await userResponse.json();

    if (score > fetchedUser.highscore) {
      await fetch(`${backendUrl}/me`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          highscore: score,
        }),
      });
    }

    if (score > highScore) {
      setHighScore(score);
    }

    const leaderboardResponse = await fetch(`${backendUrl}/leaderboard`);
    const fetchedLeaderboard = await leaderboardResponse.json();
    setLeaderboard(fetchedLeaderboard);
  };

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const handleSaveProfile = async (newUsername: string, bio: string) => {
    if (!user) return;

    await fetch(`${backendUrl}/me`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUsername
      }),
    });

    closeProfile(); // Close the profile popup
  };

  return (
    <main className="bg-gradient-to-b from-[#f8f1fc] to-[#e79995] flex flex-col w-full h-screen overflow-hidden">
      {/* Blur effect when profile is open */}
      <div className={`${isProfileOpen ? 'backdrop-blur-sm' : ''}`}>
        <Navbar openProfile={openProfile} setUser={setUser} user={user} />
        <Settings />

        <header className='bg-transparent'>
          <div className='container mx-auto'>
            <h1 className='animate-text text-center mt-3 bg-gradient-to-r bg-clip-text text-transparent 
                                    from-[#e79995] via-[#da935d] to-[#9a3bd2]'>
              Snake Game
            </h1>
          </div>
        </header>

        {/* Profile Popup */}
        {isProfileOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-transparent p-6 rounded-lg">
              <Profile
                onSave={handleSaveProfile}
                onClose={closeProfile}
              />
            </div>
          </div>
        )}

        <div className="flex-grow flex flex-col items-center justify-center">
      
          {!selectCharacter && (
            <div className="flex flex-col items-center justify-center mt-4">
           {/* GIF only shows before character is selected */}
            <img
               src="./src/assets/snakegamerecording.gif"
               alt="cool gif"
               className="w-[400px] mx-auto"
            />

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
              <ScoreBoard score={score} highScore={highScore} leaderboard={leaderboard} />
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
      </div>
    </main>
  );
}

export default App;