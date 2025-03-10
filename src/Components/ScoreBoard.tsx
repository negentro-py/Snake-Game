export function ScoreBoard() {
    return (
        <div className="scoreboard animate-shake flex h-160 w-80  mt-20 bg-gradient-to-b from-[#0f0516] to-[#9a3bd2] rounded-xl border-[#9a3bd2] flex-col items-center justify-between">

            <div className="flex justify-between w-full px-4 mt-2">
                <div className="score text-center tracking-wide text-[#da935d]">
                    <h3>Score: <span id="score">0</span></h3>
                </div>

                <div className="highscore ttracking-wide text-[#da935d]">
                    <h3>High Score: <span id="highscore">0</span></h3>
                </div>
            </div>

            <div className="text-center mt-4 text-[#da935d]">
                <h3>Leaderboard</h3>
            </div>
        </div>
    );
}
