import React, { useContext } from 'react'
// Importing context
import { ModalContext } from '../../Context/ModalContext'

const RecipeCard = ({recipe}) => {

  // Get values from context
  const { setRecipetId } = useContext(ModalContext)

  return (
    <div
      className='col-md-4 mb-3'
    >
      <div className='card'>
        <h2 className='card-header'>
          {recipe.strDrink}
        </h2>
        <img
          className='card-img-top'
          src={recipe.strDrinkThumb}
          alt={`image of ${recipe.strDrink}`}
        />
        <div
          className='card-body'
        >
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => 
              setRecipetId(recipe.idDrink)
            }
          >
            See full recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard