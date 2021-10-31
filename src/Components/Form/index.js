import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../../Context/CategoriesContext'

const Form = () => {

  const [ search, setSearch] = useState({
    name: '',
    category: ''
  })

  const { categories } = useContext(CategoriesContext)

  // Function to read content
  const getRecipeData = event => {
    setSearch({
      ...search,
      [event.target.name] : event.target.value
    })
  }

  console.log(categories)
  return (
    <form className='col-12'>
      <fieldset className='text-center'>
        <legend>Search any drink recipe by category or ingredient</legend>
      </fieldset>

      <div className='row'>
        <div className='col-md-4'>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='Search by ingredient'
            onChange={getRecipeData}
          />
        </div>
        <div className='col-md-4'>
          <select 
            className='form-control'
            name='category'
            onChange={getRecipeData}
          >
            <option value=''>-- Select category --</option>
            {categories.map(category => (
              <option 
                key={category.strCategory}
                value={category.strCategory}
              >
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-info'
            value='Search drinks'
          />
        </div>
      </div>
    </form>
  )
}

export default Form
