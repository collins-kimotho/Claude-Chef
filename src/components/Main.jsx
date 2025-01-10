import React from 'react'

const Main = () => {
  return (
    <main className="flex items-center gap-8 m-9 justify-center">
        <form action="">
            <input 
                type="text" 
                className='border-2 shrink w-64 h-14 rounded-lg p-2'
            />
        </form>
        <button className="bg-black  text-slate-100 p-2  rounded-lg h-14">
            + Add ingredient
        </button>
    </main>
  )
}

export default Main