import React from 'react'
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {

  const {favorites, remuveFromFavorites} = useAppContext();

  const navigate = useNavigate();

  console.log('favorites are', favorites);

  

  return (
    <div className=' bg-amber-50 h-auto lg:h-full container mx-auto  px-8'>
      {favorites.length > 0 ? 
        <div className='flex flex-wrap justify-center gap-6 lg:py-56 py-24'>
          {favorites.map((meal) => 
            <div  key = {meal.idMeal}>
              <div className='bg-white w-80 rounded shadow-xl duration-700 lg:hover:scale-110'>
                  <img className='h-80 rounded cursor-pointer' 
                  src={meal.strMealThumb} alt="#"
                  onClick={() => navigate(`/meal/${meal.idMeal}`)}/>
                  <div className='p-5'>
                    <h1 className='text-3xl font-bold'>{meal.strMeal}</h1>
                    <button className='mt-2 text-red-600 text-lg 
                    hover:underline decoration-2 underline-offset-4
                    ' onClick={() => remuveFromFavorites(meal.idMeal)}>Remove</button>
                  </div>       
              </div>
            </div>
            )} 
        </div> : <h1 className='h-screen flex justify-center items-center'>
          <h1 className='xl:text-4xl text-xl'>You don't have any favorite meal yet !</h1>
          </h1>
      }
    </div>
  )
}

export default Favorites;