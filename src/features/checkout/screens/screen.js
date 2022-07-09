import { CheckoutContext } from "../../../context/CheckoutContext";
import { useContext } from "react";
import {Avatar} from 'react-native-paper'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { color } from "../../../utils/colors";
import { fonts, fontSizes, fontWeight } from "../../../utils/fonts";
import PaymentForm from "../components/paymentForm";
import RestaurantInfo from "../../restaurants/components/info";
import { Provider,List } from "react-native-paper";

const CheckoutScreen = ({navigation,route}) => {
    const checkoutContext = useContext(CheckoutContext);
    if(!checkoutContext.restaurant){
        return(
            <View style={styles.container}>
                <Avatar.Icon icon="cart" size={250} />
                <Text style={styles.cartText}>Your Cart is Empty</Text>
            </View>
        )
    }
 
    return (
       
        <>
            <ScrollView>
            <RestaurantInfo restaurant={checkoutContext.restaurant} />
            <View >
                <List.Section title="orders">
                    {checkoutContext.order.map((order,idx)=>(
                        <List.Item key={idx} title={`${order}`} style={styles.listContainer} />
                    ))}
                <Text style={styles.totalText}>Total- {checkoutContext.order.length > 1?checkoutContext.order.reduce((prev,curr)=>(prev + curr)):checkoutContext.order}</Text>
                </List.Section>
            </View>
            <PaymentForm navigation={navigation} />
            </ScrollView>
        </>
     );
}
 const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    cartText:{
        fontSize: fontSizes.h4,
        fontFamily:fonts.body
    },
    listContainer:{
        padding:3,
        paddingLeft: 20,
        alignItems:"center"
    },
    totalText:{
        fontWeight: `700`,
        marginLeft: 20,
        fontSize: fontSizes.h5
    }
 })
export default CheckoutScreen;