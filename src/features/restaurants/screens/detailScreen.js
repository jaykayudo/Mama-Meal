import React, {useContext} from "react";
import { spacing } from "../../../utils/sizes";
import {View, Text, StyleSheet, ScrollView } from "react-native";
import {List, Button} from 'react-native-paper';
import RestaurantInfo from "../components/info";
import { color } from "../../../utils/colors";
import { CheckoutContext } from "../../../context/CheckoutContext";
const RestaurantDetailScreen = ({navigation, route}) => {
    const {restaurants} = route.params;
    const checkoutContext = useContext(CheckoutContext)
    const orderSpecial=()=>{
      if(restaurants != checkoutContext.restaurant){
        checkoutContext.setRestaurant(restaurants);
        checkoutContext.addToOrder(12.99)
      }else{
        checkoutContext.addToOrder(12.99)
      }
      navigation.navigate("Checkout")
    }
    return ( 
        <>
        <ScrollView>
        <View style={styles.container} >
            <RestaurantInfo restaurant={restaurants} />
        </View>
        <View>
      <List.Accordion
        title="Breakfast"
        left={props => <List.Icon {...props} icon="bread-slice" />}
        style={styles.accordion}
        >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={props => <List.Icon {...props} icon="rice" />} style={styles.accordion}>
        <List.Item title="First item"  />
        <List.Item title="Second item" />
      </List.Accordion>
    <List.Accordion
        title="Dinner"
        left={props => <List.Icon {...props} icon="room-service"  />} style={styles.accordion}>
        <List.Item title="First item"  />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={props => <List.Icon {...props} icon="cup"  />} style={styles.accordion}>
        <List.Item title="First item"  />
        <List.Item title="Second item" />
      </List.Accordion>
    <Button mode="contained" style={styles.buttonStyle} color={color.ui.brand} onPress={orderSpecial}>
      Order Special at $12.99
    </Button>
    </View>
    </ScrollView>
    </>
     );
}
 
const styles = StyleSheet.create({
    container:{
        paddingTop: spacing.md
    },
    accordion:{
        height: 50,
        paddingTop: spacing.sm,
        // flex:0.5,
        alignItems:"center",
        justifyContent:'center', 
    },
    buttonStyle:{
      width: 300,
      alignSelf: "center",
      padding: 5
    }
})
export default RestaurantDetailScreen;