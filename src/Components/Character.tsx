export function Character({ imageSrc, name }) {

    return (
        <div className="character flex flex-col justify-center p-4 border-2 rounded-sm text-center">
            <img className="w-10 h-10 p-1 flex flex-col rounded-full ring-2 ring-[#9a3bd2] dark:ring-[#e79995]"
                src={imageSrc}
                alt={`${name} avatar`} />
            <h3 className="text-[#9a3bd2]">Your Choice</h3>
        </div>
    );
}