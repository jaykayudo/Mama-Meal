import React, {createContext, useContext, useEffect, useState} from "react";
import { restaurantApi, restaurantTranform } from "./service";
import { LocationContext } from "./locationContext";
export const RestaurantContext = createContext({
    isLoading: true
})

export const RestaurantContextProvider = ({children})=>{
    const [loadingState, setLoadingState] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const {location} = useContext(LocationContext);
    const [error, setError] = useState(null);
    const retrieveRestaurants = (location)=>{
        setRestaurants([])
        setLoadingState(true)
        setTimeout(()=>{
            restaurantApi(location).then(restaurantTranform).then(res=>{
                setRestaurants(res)
                setLoadingState(false)
            }).catch(err=>{
                setError(err)
                setLoadingState(false)
            })
        },1000)
    }
    useEffect(()=>{
        const locationString = location? `${location.lat},${location.lng}`: null
        retrieveRestaurants(locationString)
    },[location])
    return (
        <RestaurantContext.Provider value={{
            isLoading: loadingState,
            restaurants: restaurants,
            error
        }}>
            {children}
        </RestaurantContext.Provider>
    )
} 