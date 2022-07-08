import React, { useState, createContext, useEffect } from 'react';
import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext()
export const LocationContextProvider  = ({children}) => {
    const [keyword,setKeyword] = useState("san francisco");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState({lat: 0, lng: 0, viewport: 0})
    const onSearch = (searchKeyword)=>{
        if(!searchKeyword.length || !searchKeyword){
            return
        }
        setKeyword(searchKeyword)
        locationRequest(searchKeyword.trim().toLowerCase()).then(locationTransform).then(res=>{
            setLocation(res);
            setIsLoading(false);
        }).catch(err=>{
            setIsLoading(false);
            setError(err);
            setLocation({lat: 0, lng: 0, viewport: 0})
        })
    }
    useEffect(()=>{
        onSearch(keyword)
    },[])
    return ( <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            keyword,
            search: onSearch
            }
        }
    >
        {children}
    </LocationContext.Provider> );
}
 
