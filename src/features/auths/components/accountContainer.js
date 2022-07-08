import React from "react";
import { View, StyleSheet  } from "react-native";
const AccountContainer = ({children, style}) => {
    return (<View style={[styles.container, style]}>
        {children}
    </View> );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(255,255,255,0.6)",
        padding:16,
        minWidth: 200
    }
})
export default AccountContainer;