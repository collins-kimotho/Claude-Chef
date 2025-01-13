import React from 'react'

const Main = () => {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li 
            key={ingredient}
            className='mt-2'
        >
            {ingredient}</li>
    ))

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

  return (
    <main className=" h-full m-8 flex flex-col items-center justify-start">
        
        <div className="flex items-center gap-8 m-8">
            <form onSubmit={addIngredient} className=''>
                <input 
                    type="text" 
                    placeholder='e.g oregano'
                    className='border-2 shrink w-64 h-14 rounded-lg p-4 bg-white  mr-8'
                    aria-label='Add ingredient'
                    name='ingredient'
                />
                <button 
                    className="bg-black  text-slate-100 p-4  rounded-lg h-14 text-sm"
                >
                    + Add ingredient
                </button> 
            </form>        
        </div>
       { ingredients.length > 0 && <section className="">
            <h2 className="text-lg font-bold">Ingredients on hand:</h2>
            <ul className="list-disc list-inside">{ingredientsListItems}</ul>
            { ingredients.length > 3 && <div className="mt-8 bg-zinc-100 p-8 rounded-lg flex gap-10 items-center">
                <div>
                    <h3 className='font-bold font-medium mb-2'>Ready for a recipe?</h3>
                    <p className="">Generate a recipe from your list of ingredients</p>
                </div>
                <button className="bg-orange-500/60 p-4 rounded-lg text-sm h-14">Get a recipe</button>
            </div>}
        </section>}
        
        
        
    </main>
  )
}

export default Main