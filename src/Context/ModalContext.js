import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'

// Create context
export const ModalContext = createContext()

const ModalProvider = (props) => {

  const [recipeId, setRecipeId] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState({})

  // once we have recipeId, is time to call api
  useEffect(() => {
    const getRecipe = async () => {
      if (!recipeId) return

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`

      const response = await axios.get(url)
      setRecipeDetails(response.data.drinks[0])
    }
    getRecipe()
  },[recipeId])

  return (
    <ModalContext.Provider
      value={{
        recipeDetails,
        setRecipeId,
        setRecipeDetails
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
