import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext'
import {LazyLoadImage} from 'react-lazy-load-image-component'

function Home() {
    const { recipe, filtredRecipe } = useContext(RecipeContext);

    // If no filter is applied, show full recipe list
    const displayList = filtredRecipe.length ? filtredRecipe : recipe;
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   const fetchData = async()=>{
    //     const response = await fetch('https://dummyjson.com/recipes')
    //     const data = await response.json()
    //     setData(data.recipes) 
    //   }
    //   fetchData()
    // }, [])

    
  return (
    <div className='flex gap-20 border items-center justify-center flex-wrap'>
        {
            displayList.map(item=>{
                return(
                    <Link to={`/description/${item.id}`} key={item.id}>
                        <div className='flex flex-col my-4 border rounded-xl items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl'>
                            <LazyLoadImage className='max-w-[16rem] rounded-t-xl transform transition duration-300 group-hover:scale-115' src={item.image} alt={item.name} />
                            <div className='flex flex-col items-center justify-center p-4 '>
                                <h2>{item.name}</h2>                       
                                <p>rating: {item.rating}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Home