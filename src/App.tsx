import './App.css'

function App() {
  return (
    <main className="bg-[#f8f1fc] flex flex-col w-full min-h-screen">
      <div>
        <nav className="flex items center justify-center w-full h-10 bg-[#da935d]">
        </nav>
      </div>

      <header className='bg-transparent'>
        <div className='container mx-auto'>
          <h1 className='text-center mt-30 text-6xl font-extrabold text-[#0f0516] underline decoration-[#9a3bd2]'> Snake Game </h1>
        </div>
      </header>

      <section id='gameboard' className="bg-transparent flex items-center mt-20 justify-center">
        <div className="grid grid-cols-20 grid-rows-20 gap-1 w-90 h-90 border border-gray-300">
          <div className="w-full h-full bg-gray-200 border border-gray-300"></div>
        </div>
      </section>

      <section id='buttons'>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button className='bg-[#e79995] text-black px-4 py-2 rounded hover:bg-red-950'>Start Game!</button>
          <button className='bg-[#e79995] text-black px-4 py-2 rounded hover:bg-red-950'>Try Again</button>
        </div>
      </section>
    </main>
  )
}

export default App
