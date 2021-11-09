import React, {useContext} from 'react'
// Context
import { RecipesContext } from '../../Context/RecipesContext'
// My components
import RecipeCard from '../RecipeCard'

const RecipesList = () => {

  // get recipes from context
    const { recipes } = useContext(RecipesContext)

  return (
    <div className='row mt-5'>
      {
        recipes ?
          recipes.map( recipe => (
            <RecipeCard 
              key={recipe.idDrink}
              recipe={recipe}
            />
          ))
        :
        <h2 className='text-primary col-12'>
          There are not results
        </h2>
      }
    </div>
  )
}

export default RecipesList