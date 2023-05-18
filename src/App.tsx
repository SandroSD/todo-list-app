import { useState } from 'react'

function App() {
  const [item, setItem] = useState<string>("")
  const [list, setList] = useState<string[]>([])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-4/12 h-4/6">
        <div className='font-serif text-4xl font-bold text-center'>
          Title
        </div>
        <div className="my-5 h-8 flex flex-row">
          <div className="basis-3/4 mr-5">
            <input
              className="w-full border-2 rounded-lg p-2"
              name="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className="basis-1/4">
            <button
              className="w-full border-2 rounded-lg disabled:bg-green-300 bg-green-500 text-white font-semibold p-2"
              onClick={() => {
                setList([...list, item]);
                setItem("");
              }}
              disabled={!item}
            >
              Agregar
            </button>
          </div>
        </div>
      <div className="text-center">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-black my-2 rounded-lg"
            >
              {item}
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default App
