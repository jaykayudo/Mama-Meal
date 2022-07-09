import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SettingsScreen from '../settings/screens/screen';
import CameraScreen from '../settings/screens/cameraScreen';

const SettingsStack = createStackNavigator()
const SettingsNavigator = () => {
    return ( 
        <SettingsStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SettingsStack.Screen name='Setting' component={SettingsScreen} />
            <SettingsStack.Screen name='Camera' component={CameraScreen} />
        </SettingsStack.Navigator>
     );
}
 
export default SettingsNavigator;