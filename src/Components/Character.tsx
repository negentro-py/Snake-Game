export function Character({ imageSrc, name }) {
    return (
        <div className="character flex flex-col justify-center items-center p-6 border-4 rounded-lg text-center bg-gradient-to-r from-[#9a3bd2] to-[#da935d] shadow-xl transform hover:scale-105 transition-transform duration-300 ring-4 ring-[#e79995]">
            <img
                className="w-24 h-24 p-2 rounded-full ring-4 ring-[#e79995] shadow-2xl mb-4"
                src={imageSrc}
                alt={`${name} avatar`}
            />
            <h3 className="text-3xl font-extrabold text-[#9a3bd2] text-shadow-lg tracking-widest uppercase font-mono">Your Choice</h3>
            <p className="text-xl text-[#e79995] mt-2 font-serif">{name}</p>
        </div>
    );
}
