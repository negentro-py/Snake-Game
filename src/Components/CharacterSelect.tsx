import { useState } from 'react';
import { Character } from './Character';
import './Character.css';

export function CharacterSelect({ setGameStarted }: { setGameStarted: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [selectCharacter, setSelectCharacter] = useState<{ name: string, imageSrc: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCharacterClick = (characterName: string, imageSrc: string) => {
        setSelectCharacter({ name: characterName, imageSrc });
        setError(null);
    };

    const handleStartGame = () => {
        if (!selectCharacter) {
            setError("Please select a character before starting the game.");
        } else {
            setGameStarted(true);
        }
    };


    return (
        <section className="flex items-center justify-center min-h-screen pixel-font">
            <div className="character-selection-container bg-[#2d1b3d] p-8 rounded-lg border-4 border-[#da935d] shadow-[0_0_20px_#da935d]">
                {/* Title */}
                <h2 className="text-3xl text-[#e79995] text-center mb-8 uppercase tracking-wider">
                    Select Your Character!
                </h2>

                {/* Character Options */}
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
                            {/* Animated Text for Snake */}
                            {character === 'Snake' ? (
                                <h3 className="text-xl uppercase animate-gradient bg-gradient-to-r from-[#da935d] via-[#9a3bd2] to-[#e79995] bg-clip-text text-transparent">
                                    {character}
                                </h3>
                            ) : (
                                <h3 className="text-xl text-[#e79995] uppercase">
                                    {character}
                                </h3>
                            )}
                        </div>
                    ))}
                </div>

                {/* Selected Character Display */}
                {selectCharacter && (
                    <div className="selected-character text-center mb-8 pixel-border">
                        <h3 className="text-2xl text-[#da935d] mb-4">
                            Selected: <span className="text-[#e79995]">{selectCharacter.name}</span>
                        </h3>
                        <Character
                            imageSrc={selectCharacter.imageSrc}
                            name={selectCharacter.name}

                        />
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-center mb-4">
                        {error}
                    </p>
                )}

                {/* Start Game Button */}
                <button
                    onClick={handleStartGame}
                    className="w-full bg-[#e79995] hover:bg-[#9a3bd2] text-black hover:text-white py-3 px-6 rounded-lg border-4 border-[#da935d] hover:border-[#e79995] transition-all duration-300 uppercase tracking-wider"
                >
                    Start Game!
                </button>
            </div>
        </section>
    );
}