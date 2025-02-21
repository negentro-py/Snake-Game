export function GameBoard() {


    return (
        <main id='gameboard' className="bg-transparent flex items-center mt-20 justify-center">

            <div className="grid grid-cols-20 grid-rows-20 gap-1 w-180 h-180 border border-gray-300">
                <div className="w-full h-full bg-gray-200 border border-gray-300"></div>
            </div>

        </main>

    )
}