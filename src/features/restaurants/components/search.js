import React, { useContext, useState } from 'react';
import { Searchbar  } from 'react-native-paper';
import { LocationContext } from './locationContext';
const Search = () => {
    const {keyword, ...locationContext} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    const searchLocation= (text)=>{
        setSearchKeyword(text)
    };
    return ( <>
         <Searchbar onChangeText={searchLocation} placeholder='Search Area' value={searchKeyword} onSubmitEditing={()=>(locationContext.search(searchKeyword))} />
    </> );
}
 
export default Search;