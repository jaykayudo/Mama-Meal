import React from "react";
import { spacing } from "../../../utils/sizes";
import {View, Text, StyleSheet, ScrollView } from "react-native";
import {List} from 'react-native-paper';
import RestaurantInfo from "../components/info";
const RestaurantDetailScreen = ({navigation, route}) => {
    const {restaurants} = route.params;
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return ( 
        <>
        <ScrollView>
        <View style={styles.container} >
            <RestaurantInfo restaurant={restaurants} />
        </View>
        <View>
        <List.Section title="Menu">
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
    </List.Section>
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
    }
})
export default RestaurantDetailScreen;