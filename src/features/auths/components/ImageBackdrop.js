import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const ImageBackdrop = ({children}) => {
    return ( 
        <ImageBackground style={styles.container} source={require('../../../../assets/home_bg.jpg')}>
            <View style={styles.light}></View>
            {children}
        </ImageBackground>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    light:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(255,255,255,0.3)"
    }
})

export default ImageBackdrop;