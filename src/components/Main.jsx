import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

const Main = () => {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

  return (
    <main className="h-full bg-white flex items-center justify-start flex-col">
        
        <div className="mt-8">
            <form onSubmit={addIngredient} className='flex items-center justify-start gap-8'>
                <input 
                    type="text" 
                    placeholder='e.g oregano'
                    className='border-2 shrink w-64 h-14 rounded-lg p-4 bg-white'
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
       { ingredients.length > 0 && 
            <IngredientsList 
                ingredients={ingredients} 
                toggleRecipeShown={toggleRecipeShown}    
            /> }

        { recipeShown && <ClaudeRecipe /> }
       
        
        
        
    </main>
  )
}

export default Main