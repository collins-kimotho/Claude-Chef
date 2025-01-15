import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../ai'

const Main = () => {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState(false)

    

    function addIngredient(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        formEl.reset()
    }

    async function getRecipe () {
        const recipeMarkdown =  await getRecipeFromMistral(ingredients) 
        setRecipe(recipeMarkdown)
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
                getRecipe={getRecipe}    
            /> }

        { recipe && <ClaudeRecipe recipe={recipe}/> }
       
        
        
        
    </main>
  )
}

export default Main