import {useState, useEffect } from 'react';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState([]);
    const [filtredRecipe, setFiltredRecipe] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json()
            setRecipe(data.recipes) 
            // console.log(data.recipes);
            setFiltredRecipe(data.recipes); // initialize filtered list too
            
        }
        fetchData()
    }, [])
    return (
    <RecipeContext.Provider value={{recipe, setRecipe, filtredRecipe, setFiltredRecipe}}>
        {children}
    </RecipeContext.Provider>
    );
}
export default RecipeProvider;