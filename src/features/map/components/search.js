import React, { useContext, useState, useEffect } from 'react';
import { Searchbar  } from 'react-native-paper';
import { LocationContext } from '../../restaurants/components/locationContext';
const MapSearch = () => {
    const {keyword, ...locationContext} = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    const searchLocation= (text)=>{
        setSearchKeyword(text)
    };
    useEffect(()=>{
        setSearchKeyword(keyword);
    },[keyword])
    return ( <>
         <Searchbar icon="map" onChangeText={searchLocation} placeholder='Search Map' value={searchKeyword} onSubmitEditing={()=>(locationContext.search(searchKeyword))} />
    </> );
}

export default MapSearch;