import React from "react";
// My components
import Header from "./Components/Header"
import Form from "./Components/Form"
import RecipesList from "./Components/RecipesList";
// Context
import CategoriesProvider from './Context/CategoriesContext'
import RecipesProvider from './Context/RecipesContext'
import ModalProvider from './Context/ModalContext'

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Form />
            </div>
            <RecipesList />
          </div>
          </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
