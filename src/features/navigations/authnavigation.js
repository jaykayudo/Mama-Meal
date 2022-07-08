import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthHome from '../auths/screens/Home';
import Login from '../auths/screens/Login';
import CreateAccount from '../auths/screens/Register';
const AuthStack = createStackNavigator()

const AuthNavigator = () =>{
    return(
        <NavigationContainer>
        <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        
        >
            <AuthStack.Screen name='Home' component={AuthHome} />
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='Register' component={CreateAccount} />
        </AuthStack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigator;