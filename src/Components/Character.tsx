export function Character({ imageSrc, name }) {
    return (
        <div className="character flex flex-col justify-center items-center p-6 border-4 rounded-lg text-center bg-gradient-to-r from-[#f9c8f9] to-[#f3a9f3] shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
                className="w-24 h-24 p-2 rounded-full ring-4 ring-[#9a3bd2] shadow-2xl mb-4"
                src={imageSrc}
                alt={`${name} avatar`}
            />
            <h3 className="text-2xl font-bold text-[#9a3bd2] text-shadow-md">Your Choice</h3>
            <p className="text-sm text-gray-600 mt-2">{name}</p>
        </div>
    );
}
