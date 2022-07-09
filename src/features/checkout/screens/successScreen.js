import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "../../../utils/colors";
import { fontWeight, fontSizes, fonts } from "../../../utils/fonts";
import { Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { CheckoutContext } from "../../../context/CheckoutContext";
const CheckoutSuccessScreen = () => {
    const checkoutContext = useContext(CheckoutContext)
    useFocusEffect(()=>{
        checkoutContext.clearContext()
    })
    
    return ( <View style={styles.container}>
        <Avatar.Icon icon={"check-bold"} size={250} color={color.bg.primary} style={styles.icon} />
        <Text style={styles.iconText}>Checkout SuccessFul</Text>
    </View> );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    iconText:{
        fontFamily: fonts.text,
        fontSize: fontSizes.h5,
        fontWeight:`${fontWeight.bold}`,
        color: color.ui.primary
    },
    icon:{
       backgroundColor: color.ui.success 
    }
}) 
export default CheckoutSuccessScreen;