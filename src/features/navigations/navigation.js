import React from 'react';
import {Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MapScreen from '../map/screens/screen';
import RestaurantsNavigator from './restaurantsNavigator';
import SettingsScreen from '../settings/screens/screen';
const iconPattern = {
    "Restaurant":{
      focused: (size,color)=>(<Ionicons name="restaurant" size={size} color={color} />),
      unfocused:(size,color)=>(<Ionicons name="restaurant-outline" size={size} color={color} />),
    },
    "Map":{
      focused: (size,color)=>(<FontAwesome5 name="map-marker" size={size} color={color} />),
      unfocused: (size,color)=>(<FontAwesome5 name="map-marker-alt" size={size} color={color} />),
    },
    "Settings":{
      focused:(size,color)=>(<Ionicons name="settings" size={size} color={color} />),
      unfocused:(size,color)=>(<Ionicons name="settings" size={size} color={color} />)
    }
  }
  const allPath = [
    "Restaurant","Map","Settings"
  ]
 
const Tab = createBottomTabNavigator()
const Navigator = () => {
    return ( <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color, size})=>{  
            let icon;  
            if(route.name === "Restaurant")
              icon  =  focused? iconPattern[`${route.name}`].focused(size,color) : iconPattern[`${route.name}`].unfocused(size,color)
            else if(route.name === "Map")
              icon  =  focused? iconPattern[`${route.name}`].focused(size,color) : iconPattern[`${route.name}`].unfocused(size,color)
            else if(route.name === "Settings")
              icon  =  focused? iconPattern[`${route.name}`].focused(size,color) : iconPattern[`${route.name}`].unfocused(size,color)
            return icon
          },
          tabBarInactiveTintColor:"gray",
          tabBarActiveTintColor:"#002005",
          headerShown: false
        })}
        >
          <Tab.Screen  name="Restaurant" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen}  />
        </Tab.Navigator>
        </NavigationContainer> );
}
 
export default Navigator;