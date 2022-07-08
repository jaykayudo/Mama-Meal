import React, { useState, useEffect, createContext } from 'react';

export const FavoritesContext = createContext();
 
export const FavoritesContextProvider = ({children}) =>{
    const [favourites, setFavourites ] = useState([]);
    const add = (restaurant)=>{
        setFavourites([favourites,...restaurant])
    }
    const remove = (restaurant)=>{
        const newFavourites = favourites.filter((x)=>(x.placeId !== restaurant.placeId))
        setFavourites(newFavourites)
    }
    return (<FavoritesContext.Provider
    value={{
        favorites: favourites,
        addFavorites: add,
        removeFavorites: remove
    }}
    >
        {children}
    </FavoritesContext.Provider>);
}