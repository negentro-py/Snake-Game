import { useEffect, useState, useCallback } from 'react';

// Map characters to their assigned fruits
const characterFruitMap: { [key: string]: string } = {
    Mouse: 'lemon.png',
    Cat: 'apple.png',
    Dog: 'blueberries.png',
    Snake: 'orange.png',
};

const GRID_SIZE = 20; // 20x20 grid
const CELL_SIZE = 25; // Each cell is 25px x 25px
const CHARACTER_SIZE = CELL_SIZE * 2; // Character is 2x the size of a grid cell
const FRUIT_SIZE = CELL_SIZE * 1.2; // Fruit is 1.2x the size of a grid cell

export function GameBoard({
    selectedCharacter,
    onGameEnd,
    setScore,
}: {
    selectedCharacter: { name: string; imageSrc: string };
    onGameEnd: () => void;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [animalSegments, setAnimalSegments] = useState([{ x: 10, y: 10 }]); // Initial animal position
    const [fruitPosition, setFruitPosition] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
    const [score, setLocalScore] = useState(0);

    // Generate a random position for the fruit
    const generateRandomPosition = useCallback(() => {
        let newPosition: { x: number; y: number };
        do {
            newPosition = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (
            // Ensure the new position does not overlap with the animal
            animalSegments.some(
                (segment) => segment.x === newPosition.x && segment.y === newPosition.y
            )
        );
        return newPosition;
    }, [animalSegments]);

    // Initialize fruit position randomly
    useEffect(() => {
        const initialFruitPosition = generateRandomPosition();
        setFruitPosition(initialFruitPosition);
    }, []); // Empty dependency array ensures this runs only once

    // Handle keyboard input for character movement
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    setDirection('UP');
                    break;
                case 'ArrowDown':
                    setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Move the animal
    useEffect(() => {
        const moveAnimal = () => {
            setAnimalSegments((prevSegments) => {
                const head = prevSegments[0]; // Current head of the animal
                let newX = head.x;
                let newY = head.y;

                // Calculate new head position based on direction
                switch (direction) {
                    case 'UP':
                        newY = head.y - 1;
                        break;
                    case 'DOWN':
                        newY = head.y + 1;
                        break;
                    case 'LEFT':
                        newX = head.x - 1;
                        break;
                    case 'RIGHT':
                        newX = head.x + 1;
                        break;
                }

                // Check for collisions with walls (game over)
                if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE) {
                    onGameEnd();
                    return prevSegments; // Do not update position if the game is over
                }

                // Check for collisions with itself (game over)
                if (prevSegments.some(segment => segment.x === newX && segment.y === newY)) {
                    onGameEnd();
                    return prevSegments; // Do not update position if the game is over
                }

                // Check for collisions with fruit
                if (newX === fruitPosition.x && newY === fruitPosition.y) {
                    // Add a new segment to the front of the animal
                    const newSegment = { x: newX, y: newY };
                    const newSegments = [newSegment, ...prevSegments]; // Add new head to the front

                    // Update score
                    setLocalScore((prev) => prev + 1);
                    setScore((prev) => prev + 1);

                    // Spawn a new fruit in a random position
                    const newFruitPosition = generateRandomPosition();
                    setFruitPosition(newFruitPosition);

                    return newSegments;
                }

                // Move the animal forward
                const newSegments = [{ x: newX, y: newY }, ...prevSegments.slice(0, -1)]; // Move head and remove tail
                return newSegments;
            });
        };

        const interval = setInterval(moveAnimal, 200); // Move every 200ms
        return () => clearInterval(interval);
    }, [direction, fruitPosition, generateRandomPosition, onGameEnd, setScore]);

    return (
        <div
            className="game-board-wrapper"
            style={{
                padding: '8px', // Border width
                backgroundColor: '#2d1b3d', // Outer border color
                display: 'inline-block', // Ensure the wrapper fits the content
                border: '4px solid #da935d', // Base border
                boxShadow: `
                    0 0 0 4px #e79995,
                    0 0 0 8px #9a3bd2,
                    0 0 0 12px #da935d
                `, // Layered pixelated border
            }}
        >
            <div
                className="game-board relative"
                style={{
                    width: `${GRID_SIZE * CELL_SIZE}px`,
                    height: `${GRID_SIZE * CELL_SIZE}px`,
                    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    backgroundColor: '#2d1b3d', // Inner background color
                }}
            >
                {/* Render the checkered board */}
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                    const row = Math.floor(index / GRID_SIZE);
                    const col = index % GRID_SIZE;
                    const isEven = (row + col) % 2 === 0;
                    return (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                top: row * CELL_SIZE,
                                left: col * CELL_SIZE,
                                width: `${CELL_SIZE}px`,
                                height: `${CELL_SIZE}px`,
                                backgroundColor: isEven ? '#2d1b3d' : '#3a2755',
                            }}
                        />
                    );
                })}

                {/* Display the animal segments */}
                {animalSegments.map((segment, index) => (
                    <img
                        key={index}
                        src={selectedCharacter.imageSrc}
                        alt={selectedCharacter.name}
                        className="absolute pixelated"
                        style={{
                            top: segment.y * CELL_SIZE - (CHARACTER_SIZE - CELL_SIZE) / 2,
                            left: segment.x * CELL_SIZE - (CHARACTER_SIZE - CELL_SIZE) / 2,
                            width: `${CHARACTER_SIZE}px`,
                            height: `${CHARACTER_SIZE}px`,
                        }}
                    />
                ))}

                {/* Display the assigned fruit */}
                <img
                    src={`./src/assets/${characterFruitMap[selectedCharacter.name]}`}
                    alt="fruit"
                    className="absolute pixelated"
                    style={{
                        top: fruitPosition.y * CELL_SIZE - (FRUIT_SIZE - CELL_SIZE) / 2,
                        left: fruitPosition.x * CELL_SIZE - (FRUIT_SIZE - CELL_SIZE) / 2,
                        width: `${FRUIT_SIZE}px`,
                        height: `${FRUIT_SIZE}px`,
                    }}
                />
            </div>
        </div>
    );
}