import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('Appcontext mast be within appContextProvider!')
    }

    return context;
}


const AppContextProvider = ({children}) => {
    const [favorites,setFavorites] = useState([]);

    const addToFavorites = (meal) => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(meal);

        setFavorites(newFavorites)
    }

    const remuveFromFavorites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((meal) => meal.idMeal !== id);

        setFavorites(newFavorites);
    }

    return (
        <AppContext.Provider value={{favorites, addToFavorites, remuveFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;