import React from "react";
import { View, StyleSheet,Text, Platform } from "react-native";
import WebView from "react-native-webview";
import {Card} from 'react-native-paper';
import { spacing, dimension } from "../../../utils/sizes";
import { fonts, fontSizes } from "../../../utils/fonts";

const isAndroid = Platform.OS === "android";
const Image = isAndroid? WebView: Card.Cover
const MapCallout = ({restaurant}) => {
    const {
        name="Some Restaurant",
        photos = "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    } = restaurant
    return ( <>
        <View>
        <Card style={styles.container}>
            <Image style={styles.img} source={{ uri: photos }} />
            <Card.Content style={{minHeight: dimension.lg}}>
                <Text style={styles.text}>{name}</Text>
            </Card.Content>
        </Card>
        </View>
    </> );
}
const styles = StyleSheet.create({
    container:{
        maxWidth: dimension.xl,
        height: dimension.xl,
        paddingTop: spacing.sm,
    },
    img:{
        width: '100%',
        height: isAndroid? dimension.xl: dimension.lg,
        borderRadius: spacing.sm
    },
    text:{
        fontSize: fontSizes.caption,
        fontFamily: fonts.text,
        // lineHeight: 0.3
    }
})
export default MapCallout;