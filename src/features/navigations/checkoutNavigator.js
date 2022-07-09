import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CheckoutScreen from '../checkout/screens/screen';
import CheckoutFailureScreen from '../checkout/screens/failureScreen';
import CheckoutSuccessScreen from '../checkout/screens/successScreen';
const CheckoutStack = createStackNavigator()

const CheckoutNavigator = () => {
    return ( 
        <CheckoutStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <CheckoutStack.Screen name="CheckoutHome" component={CheckoutScreen} />
            <CheckoutStack.Screen name="CheckoutFailure" component={CheckoutFailureScreen} />
            <CheckoutStack.Screen name="CheckoutSuccess" component={CheckoutSuccessScreen} />
        </CheckoutStack.Navigator>
    );
}
 
export default CheckoutNavigator;