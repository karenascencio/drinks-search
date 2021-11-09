import React, { useContext, useState } from 'react'
// Importing context
import { ModalContext } from '../../Context/ModalContext'
// Importing modal from materialUI
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block'
    },
    header: {
    padding: '12px 0',
    borderBottom: '1px solid darkgrey'
    },
    content: {
    padding: "12px 0",
    overflow: 'scroll'
    }
}));


const RecipeCard = ({recipe}) => {

  //config materialUI modal
  const [ modalStyle ] = useState(getModalStyle)
  const [ open, setOpen] = useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Get values from context
  const { recipeDetails, setRecipeId, setRecipeDetails } = useContext(ModalContext)

  //Show and reset ingredients
  function showIngredients (info) {
    let ingredients = []
    for (let i = 1; i < 16; i++){
      if ( info[`strIngredients${i}`] ){
        ingredients.push(
          <li>
            {info[`strIngredients${i}`]}
          </li>
        )
      }
    }
    return ingredients
  }

  return (
    <div
      className='col-md-4 mb-3'
    >
      <div className='card'>
        <h2 className='card-header'>
          {recipe.strDrink}
        </h2>
        <img
          className='card-img-top'
          src={recipe.strDrinkThumb}
          alt={`image of ${recipe.strDrink}`}
        />
        <div
          className='card-body'
        >
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => {
              setRecipeId(recipe.idDrink)
              handleOpen()
            }}
          >
            See full recipe
          </button>
          <Modal
            open={open}
            onClose={ () => {
              setRecipeId(null)
              setRecipeDetails({})
              handleClose()
            }}
          >
            <div 
              style={modalStyle}
              className={classes.paper}
            >
              <h2
                className='text-primary'
              >
                {recipeDetails.strDrink}
              </h2>
              <h3
                className='mt-4'
              >
                Ingredients and quantities
              </h3>
              <ul>
                { showIngredients(recipeDetails) }
              </ul>
              <h3
                className='mt-4'
              >
                Directions
              </h3>
              <p>
                {recipeDetails.strInstructions}
              </p>
              <img
                className='img-fluid my-4'
                src={recipeDetails.strDrinkThumb}
                alt=''
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard