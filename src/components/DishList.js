import axios from 'axios';
import React from 'react'
import '../App';
import { useEffect,useState } from 'react';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const DishList = () => {

    const [meals, setMeals] = useState([]);


    const {favorites, addToFavorites, remuveFromFavorites} = useAppContext();

    const navigate = useNavigate();

    console.log('favorites are', favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((meal) => meal.idMeal === id);
        return boolean;
    };
  
    const getData =  () => {
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        console.log(res.data.meals)
        setMeals(res.data.meals)
    })
      .catch(err => console.error(err));
    }
  
    useEffect (() => {
      getData();
    }, [])

  
  return (
    <div className=' bg-amber-50 h-auto lg:py-56 py-24'>
        {meals.map((meal) => 
        <div key = {meal.idMeal}>

                
                <div className='flex flex-col items-center justify-center'>
                  <div className='group relative hover:last:opacity-100 cursor-pointer'>
                      <img className='hover:blur-sm duration-700 rounded h-auto max-w-full' src={meal.strMealThumb} 
                      alt="#" 
                      onClick={() => navigate(`/meal/${meal.idMeal}`)}/>
                       <h1 className='absolute inset-0 flex justify-center items-center pointer-events-none text-white text-4xl 
                       opacity-0 group-hover:opacity-100 duration-700'>Read More...</h1>
                  </div>

                  <h2 className='mt-8 text-4xl'>{meal.strMeal}</h2>
               </div>
                <div className='flex flex-row justify-evenly mt-12 lg:mb-12 mb-2 text-lg h-16'>

                    <div className='flex justify-center active:scale-100 lg:hover:scale-125 duration-700'>
                            {favoritesChecker(meal.idMeal) ? 
                            <button className='border-2 border-red-500 rounded-md box-border w-32'  onClick={() => remuveFromFavorites(meal.idMeal)}>Remove</button>
                            : <button className='border-2 border-teal-400 rounded-md box-border w-32' onClick={() => addToFavorites(meal)}>Add to Favorites</button>
                            }
                    </div>

                    <div className='flex justify-center active:scale-100 lg:hover:scale-125 duration-700'>
                      <button className='border-2 border-cyan-500 rounded-md box-border h-18 w-32' onClick={getData}>Next</button>
                    </div>

                </div>
                
        </div>
        )}
    </div>
  )
}

export default DishList