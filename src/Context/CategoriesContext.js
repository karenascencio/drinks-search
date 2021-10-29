import React, {createContext, useState } from 'react'

// Create context
export const CategoriesContext = createContext()

// Provider is where functions and states are
const CategoriesProvider = (props) => {
  // Create context state
  const [hello, setHello] = useState('hi')

  return (
    <CategoriesContext.Provider

      value={{
        hello,
        setHello
      }}
    >
      { props.children }
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider