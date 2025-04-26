import React from 'react'
import { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function Search() {
  const {recipe, setFiltredRecipe} = useContext(RecipeContext)

  const searchRecipe = (e)=>{
    console.log("searching recipe");

    const searchTerm = e.target.value.toLowerCase();
    if(searchTerm===""){
      setFiltredRecipe(recipe)
    }else{
      const filtredRecipe = recipe.filter(item=>{
        return item.name.toLowerCase().includes(searchTerm)
      })
      setFiltredRecipe(filtredRecipe)
    }
  }
  return (
    <div>
      <input onChange={searchRecipe} type="text" placeholder="Search..." className="border p-2 rounded-md"/>
    </div>
  )
}

export default Search