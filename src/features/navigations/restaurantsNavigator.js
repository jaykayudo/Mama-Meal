import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import RestaurantScreen from '../restaurants/screens/screen';
import RestaurantDetailScreen from '../restaurants/screens/detailScreen';
const RestaurantStack = createStackNavigator()

const RestaurantsNavigator = () =>{
    return(
        <RestaurantStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        
        >
            <RestaurantStack.Screen name='Restaurants' component={RestaurantScreen} />
            <RestaurantStack.Screen name='RestaurantsDetails' component={RestaurantDetailScreen} />
        </RestaurantStack.Navigator>
    )
}
export default RestaurantsNavigator;