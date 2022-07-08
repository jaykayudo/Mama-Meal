import React, {useContext, useEffect, useState} from "react";
import MapView, {Marker, Callout} from 'react-native-maps';
import { View, StyleSheet,Dimensions } from "react-native";
import { spacing } from "../../../utils/sizes";
import MapSearch from "../components/search";
import { LocationContext } from "../../restaurants/components/locationContext";
import { RestaurantContext } from "../../restaurants/components/context";
import MapCallout from "../components/mapCollout";
const MapScreen = ({navigation}) => {
    const {restaurants} = useContext(RestaurantContext);
    const {location} = useContext(LocationContext);
    const {lat, lng, viewport} = location;
    const [latDelta, setLatDelta] = useState(0);
    

    useEffect(()=>{
        const nortlat = viewport.northeast.lat;
        const southlat = viewport.southwest.lat;
        setLatDelta(nortlat- southlat)
    },[location,viewport])
    return (
        <>
            <View style={styles.search}>
                    <MapSearch />
            </View>
            <View>
                <MapView style={styles.map} region={{
                    latitude:lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02
                }} >
                    {restaurants.map((res)=>(
                        <Marker
                        key={res.name}
                        title={res.name}
                        coordinate = {{
                            longitude: res.geometry.location.lng,
                            latitude: res.geometry.location.lat
                        }}
                        >
                            <Callout onPress={()=>(navigation.navigate("RestaurantsDetails",{restaurants:{item: res}}))}>
                                <MapCallout restaurant={res} />
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height,
    },
    search:{
        position:"absolute",
        zIndex: 999,
        width:Dimensions.get('window').width,
        padding:spacing.md,
    }
})

export default MapScreen;