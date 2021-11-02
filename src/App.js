import React from "react";
// My components
import Header from "./Components/Header"
import Form from "./Components/Form"
// Context
import CategoriesProvider from "./Context/CategoriesContext"
import RecipesProvider from "./Context/RecipesContext"

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Form />
          </div>
        </div>
        </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
