import { useState } from 'react';
import './Character.css';

export function CharacterSelect({
    setGameStarted,
    setSelectedCharacter,
}: {
    setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedCharacter: React.Dispatch<React.SetStateAction<{ name: string; imageSrc: string } | null>>;
}) {
    const [error, setError] = useState<string | null>(null);
    const [selectedCharacterPreview, setSelectedCharacterPreview] = useState<{ name: string; imageSrc: string } | null>(null);

    const handleCharacterClick = (characterName: string, imageSrc: string) => {
        setSelectedCharacter({ name: characterName, imageSrc });
        setSelectedCharacterPreview({ name: characterName, imageSrc });
        setError(null); // Clear any previous error
    };

    const handleStartGame = () => {
        if (!selectedCharacterPreview) {
            setError('Please select a character before starting the game.');
        } else {
            setGameStarted(true);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen pixel-font ">
            <div className="character-selection-container bg-[#2d1b3d] p-8 rounded-lg border-4 border-[#da935d] shadow-[0_0_20px_#da935d] pixel-border">
                <h2 className="text-4xl text-[#e79995] text-center mb-8 uppercase tracking-wider pixel-text">
                    Select Your Character!
                </h2>

                <div className="character-options grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {['Mouse', 'Cat', 'Dog', 'Snake'].map((character) => (
                        <div
                            key={character}
                            onClick={() => handleCharacterClick(character, `./src/assets/${character.toLowerCase()}.png`)}
                            className="cursor-pointer flex flex-col items-center p-4 bg-[#9a3bd2] rounded-lg hover:bg-[#da935d] transition-all duration-300 pixel-border"
                        >
                            <img
                                src={`./src/assets/${character.toLowerCase()}.png`}
                                alt={character}
                                className="w-20 h-20 mb-2 pixelated border-4 border-[#e79995] rounded-full"
                            />
                            {character === 'Snake' ? (
                                <h3 className="text-xl uppercase animate-gradient bg-gradient-to-r from-[#da935d] via-[#9a3bd2] to-[#e79995] bg-clip-text text-transparent pixel-text">
                                    {character}
                                </h3>
                            ) : (
                                <h3 className="text-xl text-[#e79995] uppercase pixel-text">
                                    {character}
                                </h3>
                            )}
                        </div>
                    ))}
                </div>

                {/* Display the selected character preview with retro style */}
                {selectedCharacterPreview && (
                    <div className="cursor-pointer flex flex-col items-center p-4 bg-[#9a3bd2] rounded-lg hover:bg-[#da935d] transition-all duration-300 pixel-border">
                        <img
                            src={selectedCharacterPreview.imageSrc}
                            alt={selectedCharacterPreview.name}
                            className="w-20 h-20 mb-2 pixelated border-4 border-[#e79995] rounded-full"
                        />
                        {selectedCharacterPreview.name === 'Snake' ? (
                            <h3 className="text-xl uppercase animate-gradient bg-gradient-to-r from-[#da935d] via-[#9a3bd2] to-[#e79995] bg-clip-text text-transparent pixel-text">
                                {selectedCharacterPreview.name}
                            </h3>
                        ) : (
                            <h3 className="text-xl text-[#e79995] uppercase pixel-text">
                                {selectedCharacterPreview.name}
                            </h3>
                        )}
                    </div>
                )}

                <button
                    onClick={handleStartGame}
                    className="w-full bg-[#e79995] hover:bg-[#9a3bd2] text-black hover:text-white py-3 px-6 rounded-lg border-4 border-[#da935d] hover:border-[#e79995] transition-all duration-300 uppercase tracking-wider pixel-text"
                >
                    Start Game!
                </button>

                {error && (
                    <p className="text-red-500 text-center mb-4 pixel-text">
                        {error}
                    </p>
                )}
            </div>
        </section>
    );
}