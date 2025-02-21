interface CharacterProps {
    id: number;
    name: string;
    image: string;
}

interface CharacterCardProps {
    character: CharacterProps;
    onSelect: (character: CharacterProps) => void;
    isSelected: boolean;
}

export const Character = ({ character, onSelect, isSelected }: CharacterCardProps) => {
    return (
        <div
            className={`character-card p-4 border-2 rounded-md ${isSelected ? 'border-blue-500' : 'border-gray-300'
                } cursor-pointer`}
            onClick={() => onSelect(character)}
        >
            <img
                src={character.image}
                alt={character.name}
                className="w-24 h-24 object-cover mb-2 mx-auto"
            />
            <h3 className="text-center">{character.name}</h3>
        </div>
    );
}
