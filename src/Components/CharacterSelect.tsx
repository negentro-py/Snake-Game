import { useState } from 'react';
import { Character } from './Character';

export function CharacterSelect({ setGameStarted }: { setGameStarted: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [selectCharacter, setSelectCharacter] = useState<{ name: string, imageSrc: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCharacterClick = (characterName: string, imageSrc: string) => {
        setSelectCharacter({ name: characterName, imageSrc });
        setError(null); // Reset error when a character is selected
    };

    const handleStartGame = () => {
        if (!selectCharacter) {
            setError("Please select a character before starting the game.");
        } else {
            setGameStarted(true);
        }
    };

    return (
        <section id='characterselect' className='flex items-center justify-center bg-[#f9f1f3] min-h-screen'>
            <div className="character-selection-container flex flex-col items-center justify-center w-180 h-160 rounded-2xl bg-gradient-to-r from-[#da935d] to-[#e79995] p-6 shadow-2xl">
                <div className="flex justify-center w-full mb-6">
                    <h2 className='text-[#9a3bd2] text-center font-bold text-2xl'>Select Your Character!</h2>
                </div>

                <div className="character-options flex flex-wrap justify-center gap-6 mb-6 w-full">
                    <div onClick={() => handleCharacterClick('Mouse', './src/assets/mouse.jpg')} className="character text-center cursor-pointer p-4 rounded-lg border-4 border-[#9a3bd2] hover:scale-105 transition-transform duration-200">
                        <img src='./src/assets/mouse.jpg' alt="Mouse" className="w-24 h-24 rounded-full border-4 border-[#9a3bd2] mb-2" />
                        <h3 className="text-[#9a3bd2] text-xl">Mouse</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Cat', './src/assets/cat.jpeg')} className="character text-center cursor-pointer p-4 rounded-lg border-4 border-[#9a3bd2] hover:scale-105 transition-transform duration-200">
                        <img src='./src/assets/cat.jpeg' alt="Cat" className="w-24 h-24 rounded-full border-4 border-[#9a3bd2] mb-2" />
                        <h3 className="text-[#9a3bd2] text-xl">Cat</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Dog', './src/assets/dog.png')} className="character text-center cursor-pointer p-4 rounded-lg border-4 border-[#9a3bd2] hover:scale-105 transition-transform duration-200">
                        <img src='./src/assets/dog.png' alt="Dog" className="w-24 h-24 rounded-full border-4 border-[#9a3bd2] hover: bg-white mb-2" />
                        <h3 className="text-[#9a3bd2] text-xl">Dog</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Snake', './src/assets/snake.png')} className="character text-center cursor-pointer p-4 rounded-lg border-4 border-[#9a3bd2] hover:scale-105 transition-transform duration-200">
                        <img src='./src/assets/snake.png' alt="Snake" className="w-24 h-24 rounded-full border-4 border-[#9a3bd2] mb-2" />
                        <h3 className="text-[#9a3bd2] text-xl">Snake</h3>
                    </div>
                </div>

                <div className="selected-character-and-start mt-6 flex flex-col items-center justify-center w-full">
                    {selectCharacter && (
                        <Character
                            imageSrc={selectCharacter.imageSrc}
                            name={selectCharacter.name}
                        />
                    )}

                    {error && <h3 className="text-red-500 mt-2">{error}</h3>}

                    <button
                        onClick={handleStartGame}
                        id="Start Game"
                        className="bg-[#9a3bd2] hover:bg-[#e79995] text-black hover:text-white py-2 px-4 rounded-lg mt-4 border-2 border-[#9a3bd2] hover:border-[#e79995] transition-all duration-300"
                    >
                        Start Game!
                    </button>
                </div>
            </div>
        </section>
    );
}
