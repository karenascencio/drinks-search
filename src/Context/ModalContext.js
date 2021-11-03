import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'

// Create context
export const ModalContext = createContext()

const ModalProvider = (props) => {

  // Provider state
  const [ recipeId, setRecipeId ] = useState(null)

  return (
    <ModalContext.Provider
      value={
        setRecipeId
      }
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
