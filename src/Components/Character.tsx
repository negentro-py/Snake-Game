export function Character({ imageSrc, name }: { imageSrc: string; name: string }) {
    return (
        <div className="character flex flex-col justify-center items-center p-6 rounded-lg text-center bg-[#2d1b3d] border-4 border-[#9a3bd2] shadow-[0_0_10px_#9a3bd2] hover:shadow-[0_0_20px_#e79995] transform hover:scale-105 transition-all duration-300 pixel-font pixel-border">
            {/* Pixelated Image Container */}
            <div className="w-24 h-24 mb-4 border-4 border-[#e79995] rounded-full bg-[#da935d] p-1 shadow-[0_0_10px_#da935d] pixel-border">
                <img
                    src={imageSrc}
                    alt={`${name} avatar`}
                    className="w-full h-full rounded-full pixelated"
                />
            </div>

            {/* Name */}
            <h3 className="text-2xl text-[#e79995] uppercase tracking-wider pixel-text">
                {name}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-[#da935d] mt-1 pixel-text">
                Your Choice
            </p>
        </div>
    );
}