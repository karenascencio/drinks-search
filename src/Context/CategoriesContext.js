import axios from 'axios'
import React, {createContext, useState, useEffect } from 'react'

// Create context
export const CategoriesContext = createContext()

// Provider is where functions and states are
const CategoriesProvider = (props) => {
  // Create context state
  const [categories, setCategories] = useState([])

  // Call api with axios
  useEffect(() => {
    const getCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const categoriesFromApi = await axios.get(url)
      setCategories(categoriesFromApi.data.drinks)
    }
    getCategories()
  }, [])

  return (
    <CategoriesContext.Provider

      value={{
        categories
      }}
    >
      { props.children }
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider