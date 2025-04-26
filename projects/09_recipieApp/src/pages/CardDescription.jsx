import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext';
import { useParams } from 'react-router-dom';

function CardDescription() {
  const {recipe} = useContext(RecipeContext);
  const {descId} = useParams();
  const selectedRecipe = recipe.find(item=>item.id === parseInt(descId));
  // console.log(selectedRecipe);
   // 🔒 Safety check to prevent error
   if (!selectedRecipe) {
    return <div className='text-red-600 text-center mt-10'>Loading... or recipe not found.</div>;
  }

  
  return (
    
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>{selectedRecipe.name}</h1> 
      <img className='w-96 my-4' src={selectedRecipe.image} alt={selectedRecipe.name} />
      <p className='font-bold'>Ingredients</p>
      <ul className='list-disc list-inside'>
          {
            selectedRecipe.ingredients.map((ing, index)=>(
              <li key={index}>{ing}</li>
            ))
          }
      </ul>
      <p className='font-semibold'>Instructions:</p>
      <ul>
        {selectedRecipe.instructions.map((step, index) => (
          <li key={index}>{index+1}. {step}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default CardDescription