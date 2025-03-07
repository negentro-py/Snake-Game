export function GameBoard() {
    const gridSize = 16;
    const imageIndex = 42;

    return (
        <main id='gameboard' className="bg-transparent flex items-center mt-20 justify-center">
            <div className="gameboard-container flex flex-col items-center justify-center w-180 h-160 rounded-2xl bg-gradient-to-r from-[#da935d] to-[#e79995] p-6 shadow-2xl">
                <div className="border-5 border-[#9a3bd2] rounded-lg p-0">
                    <div className="grid grid-cols-16 grid-rows-16 gap-0 w-130 h-130">
                        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
                            const row = Math.floor(index / gridSize);
                            const col = index % gridSize;
                            const isOffWhite = (row + col) % 2 === 0; // Alternate colors

                            return (
                                <div
                                    key={index}
                                    className="w-full h-full"
                                    style = {{ backgroundColor: isOffWhite ? "#f8f6f0" : ""}}
                                >
                                    {index === imageIndex &&(
                                        <img src="./src/assets/Lemon.png/>"
                                        className = "w-6 h-6"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}