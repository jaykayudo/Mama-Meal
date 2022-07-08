import { View, Text, StyleSheet  } from "react-native";
import { spacing, dimension } from "../../../utils/sizes";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { image } from "../../../utils/images";
import { fonts } from "../../../utils/fonts";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star"
import openNow from "../../../../assets/open"

const RestaurantInfo = ({restaurant = {},}) => {
    const {
        name="Some Restaurant",
        icon,
        isOpenNow = true,
        photos = "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
        address = "100 Somewhere that i don't know",
        rating=4,
        isClosed,
    } = restaurant.item;
    const svgArray = Array.from(new Array(Math.ceil(rating)))
    return ( 
    
    <View style={{marginBottom: spacing.md}}>
        
        <Card>
        <Card.Cover source={{ uri: photos  }} />
        <Card.Content>
        <Title style={styles.textStyle}>{name}</Title>
        <View style={styles.flexBetween}>
            <View style={styles.svgContainer}>
                {svgArray.map((data,idx)=>(<SvgXml key={idx} xml={star} width={dimension.sm} height={dimension.sm} />))}
            </View>
            <View style={styles.flexBetween}>
                {isClosed && <Text style={styles.dangerTextStyle}>CLOSED TEMPORARILY</Text>}
                {isOpenNow && <SvgXml xml={openNow} width={dimension.sm + 10} height={dimension.sm + 10}/>}
            </View>
            
        </View>
        <Paragraph style={styles.paragraphStyle}>{address}</Paragraph>
        </Card.Content>   
        </Card>
    </View>);
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: spacing.md
    },
    textStyle:{
        fontFamily: fonts.body
    },
    paragraphStyle:{
        fontFamily: fonts.text
    },
    svgContainer:{
        flexDirection: 'row',
        paddingTop: spacing.sm,
        paddingBottom: spacing.sm
    },
    flexBetween:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"
    },
    dangerTextStyle:{
        fontSize: 12,
        textTransform: "uppercase",
        color:'red',
        fontWeight:"bold"
    }
})



export default RestaurantInfo;