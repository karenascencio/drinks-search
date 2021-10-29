import React from "react";
// My components
import Header from "./Components/Header"
import Form from "./Components/Form"
// Context
import CategoriesProvider from "./Context/CategoriesContext";

function App() {
  return (
    <CategoriesProvider>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Form />
        </div>
      </div>
    </CategoriesProvider>
  );
}

export default App;
