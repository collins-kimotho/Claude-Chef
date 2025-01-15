import React from 'react'

const IngredientsList = (props) => {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li 
            key={ingredient}
            className='mt-2'
        >
            {ingredient}</li>
    ))


  return (<section className="mt-4">
    <h2 className="text-lg font-bold">Ingredients on hand:</h2>
    <ul className="list-disc list-inside">{ingredientsListItems}</ul>
    { props.ingredients.length > 3 && <div className="mt-8 bg-zinc-400/50 p-4 rounded-lg flex items-center justify-center gap-8">
        <div>
            <h3 className='font-bold font-medium mb-2'>Ready for a recipe?</h3>
            <p className="">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="bg-orange-500/60 p-4 rounded-lg text-sm" onClick={props.getRecipe}>Get a recipe</button>
    </div>}

</section>
    
  )
}

export default IngredientsList