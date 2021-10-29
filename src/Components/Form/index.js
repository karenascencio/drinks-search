import React from 'react'

const Form = () => {

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
