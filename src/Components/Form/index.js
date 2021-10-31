import React, { useContext } from 'react'
import { CategoriesContext } from '../../Context/CategoriesContext'

const Form = () => {

  const { categories } = useContext(CategoriesContext)

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
          />
        </div>
        <div className='col-md-4'>
          <select 
            className='form-control'
            name='category'
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
