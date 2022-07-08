import { spacing } from '../../../utils/sizes';
import React, {useContext} from 'react';

import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import RestaurantInfo from '../components/info'
import { RestaurantContext } from '../components/context';
import { ActivityIndicator } from 'react-native-paper';
import { LocationContext } from '../components/locationContext';
import Search from '../components/search';
const RestaurantScreen = ({navigation}) => {
   const restContext = useContext(RestaurantContext);
   const locationContext = useContext(LocationContext);
    return ( <>
    
    <View style={styles.searchContainer}>
        <Search />
     </View>
     {
        restContext.isLoading && (
            <View>
                <ActivityIndicator size={'large'} animating={true} color={'#002005'} />
            </View>
        )
     }
     {
        !restContext.isLoading && (
            <View style={styles.container}>
                <FlatList 
                data={restContext.restaurants}
                renderItem={(item)=>(<TouchableOpacity onPress={()=>(navigation.navigate("RestaurantsDetails",{restaurants:item}))}><RestaurantInfo navigation={navigation} restaurant={item} /></TouchableOpacity>)}
                contentContainerStyle = {styles.listSpacingStyle}
                keyExtractor ={(item)=> item.name}
                />
            </View>
        )
     }
     
     
    </> );
}
const styles = StyleSheet.create({
    searchContainer:{
      padding: spacing.md,
    },
    container:{
        flex: 1,
        padding: spacing.md,
        paddingTop: 0
    },
    listSpacingStyle:{
        marginBottom: spacing.md
    }
  });
 
export default RestaurantScreen;