import React, { createContext, useState, useEffect } from "react"
import axios from 'axios'
export const RecipesContext = createContext()

const RecipesProvider = ({ children }) => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearchRecipe] = useState({
    name:'',
    category:''
  })
  const [isAQuery, setIsAQuery] = useState(false)
  const { name, category } = search

  useEffect(() => {
    if (isAQuery){
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
        const response = await axios.get(url)
        setRecipes(response.data.drinks)
      }
      getRecipes()
    }
  },[search])

  return (
    <RecipesContext.Provider
      value={{
        setSearchRecipe,
        setIsAQuery
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider