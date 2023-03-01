import React from 'react'

function IngredientsTable({ingredientsWithMeasures}) {

  return (
            <table className='flex flex-col pt-8'> 
                    {ingredientsWithMeasures.map((item) => 
                        <tbody className='flex flex-row py-1' key ={item.index}>
                            <tr className='basis-1/2 px-6 py-1 lg:ml-28 bg-amber-800 h-auto rounded'>
                                <td className=' text-white'>{item.ingredient}</td>
                            </tr>
                            <tr className='basis-1/2 py-1 lg:mr-28 bg-amber-200 h-auto flex justify-center rounded'>
                                <td className='font-Itim'>{item.measure}</td>
                            </tr>
                        </tbody>
                        )}
                </table>
  )
}

export default IngredientsTable;