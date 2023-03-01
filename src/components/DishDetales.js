import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import IngredientsTable from './IngredientsTable';
import ReactPlayer from 'react-player'
import axios from 'axios';

const DishDetales = () => {

  const [meal, setMeal] = useState({});

  const {idMeal} = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1//lookup.php?i=${idMeal}`)
      .then(res => {
        setMeal(res.data.meals[0])
      }).catch(err => console.log(err))
  }, [idMeal]);




// Filtered ingredients
  const ingredients = Object.keys(meal).filter((key) => key.startsWith
  ('strIngredient')).filter((key) => meal[key] !== '' && meal[key] !== null);
  
// Create object with ingredients and measures

  const ingredientsWithMeasures = ingredients.map((key, index) => (
  {
    index: index + 1,
    ingredient: meal[key],
    measure: meal[`strMeasure${index + 1}`]
  }
  ))

  return (
    <div className='lg:py-56 py-28'>
        
      <h1 className='flex justify-center pb-8 text-4xl font-bold'>{meal?.strMeal}</h1>

      <div className='flex justify-center lg:float-left lg:mr-8 pb-8'>
        <img className='rounded shadow-2xl lg:hover:scale-125 duration-700 
        h-80 w-80' src={meal?.strMealThumb} alt="#" />
      </div>

      <p className='text-xl text-justify'>{meal.strInstructions}</p>

      <h1 className='clear-both pt-36 text-4xl'>Ingredients:</h1>

      <IngredientsTable ingredientsWithMeasures = 
      {ingredientsWithMeasures}/>
      
      <div className='flex justify-center mt-36'>
        <ReactPlayer url={meal.strYoutube} 
        playing = {false}
        controls = 'false'/>
      </div>
          
    </div>
  )
}

export default DishDetales;