import { useState } from 'react';
import { Character } from './Character';

export function CharacterSelect() {
    const [selectCharacter, setSelectCharacter] = useState(null);

    const handleCharacterClick = (characterName, imageSrc) => {
        setSelectCharacter({ name: characterName, imageSrc });
    };
    return (
        <section id='characterselect' className='flex items-center mt-20 justify-center'>

            <div className="character-selection-container flex flex-col items-center justify-center w-180 h-180 rounded-2xl bg-[#da935d]">
                <div >
                    <h2 className='py-4'> Select Your Character! </h2>
                </div>

                <div className="character-options text-pretty">
                    {selectCharacter && (
                        <Character
                            imageSrc={selectCharacter.imageSrc}
                            name={selectCharacter.name}
                        />
                    )}

                    <div onClick={() => handleCharacterClick('Mouse', './src/assets/mouse.jpg')} className="character text-center px-2 ">
                        <img src='./src/assets/mouse.jpg' />
                        <h3>Mouse</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Cat', './src/assets/cat.jpeg')} className="character text-center px-2">
                        <img src='./src/assets/cat.jpeg' />
                        <h3>Cat</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Dog', './src/assets/dog.png')} className="character text-center px-2">
                        <img src='./src/assets/dog.png' />
                        <h3>Dog</h3>
                    </div>

                    <div onClick={() => handleCharacterClick('Snake', './src/assets/snake.png')} className="character text-center px-2">
                        <img src='./src/assets/snake.png' />
                        <h3>Snake</h3>
                    </div>

                </div>
            </div>
        </section >
    )
}