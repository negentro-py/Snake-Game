export function GameBoard() {


    return (
        <main>
            <section id='gameboard' className="bg-transparent flex items-center mt-20 justify-center">
                <div className="grid grid-cols-20 grid-rows-20 gap-1 w-90 h-90 border border-gray-300">
                    <div className="w-full h-full bg-gray-200 border border-gray-300"></div>
                </div>

            </section>

        </main>

    )
}