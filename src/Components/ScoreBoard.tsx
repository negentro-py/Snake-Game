import React from 'react';
import './ScoreBoard.css';

interface LeaderboardEntry {
    name: string;
    highscore: number;
}

interface ScoreBoardProps {
    score: number;
    highScore: number;
    leaderboard: LeaderboardEntry[]; // Add leaderboard as a prop
}

export function ScoreBoard({ score, highScore, leaderboard }: ScoreBoardProps) {
    // Sort the leaderboard by score (descending)
    const sortedLeaderboard = [...leaderboard].sort((a, b) => b.highscore - a.highscore);

    return (
        <div className="scoreboard flex h-[400px] w-[300px] mt-5 bg-gradient-to-b from-[#0f0516] to-[#9a3bd2] rounded-xl border-4 border-[#9a3bd2] flex-col items-center justify-between pixel-font retro-glow">
            {/* Username Display */}
            <div className="username text-center text-[#da935d] pixel-text mt-4">
                <h3>Player: <span className="glow">{localStorage.getItem('username') || 'Guest'}</span></h3>
            </div>

            {/* Score and High Score Section */}
            <div className="flex justify-between w-full px-4 mt-4">
                <div className="score text-center tracking-wide pixel-text">
                    <h3>Score: <span id="score" className="glow">{score}</span></h3>
                </div>

                <div className="highscore tracking-wide pixel-text">
                    <h3>High Score: <span id="highscore" className="glow">{highScore}</span></h3>
                </div>
            </div>

            {/* Leaderboard Section */}
            <div className="leaderboard w-full px-4 mt-4 pixel-text">
                <h3 className="text-center mb-2 retro-flicker">Leaderboard</h3>
                <ul className="leaderboard-list">
                    {sortedLeaderboard.map((entry, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{index + 1}. {entry.name}</span>
                            <span>{entry.highscore}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}