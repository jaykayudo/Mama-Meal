import { Camera, CameraType } from "expo-camera";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useEffect, useRef, useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from "../../../context/AuthContext";
const CameraScreen = ({navigation}) => {
    const authContext = useContext(AuthContext)
    const [hasPermission, setHasPermission] = useState(null)
   
    const [readyCamera, setReadyCamera] = useState(false)
    const cameraRef = useRef()
    useEffect(()=>{
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
    },[])

    if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      } 
    const takePicture  = async()=>{
        if(cameraRef){
            const photo = await cameraRef.current.takePictureAsync()
            
            if(photo){
                try{
                    await AsyncStorage.setItem(`${authContext.user.email}-photo`, photo.uri)
                    navigation.goBack()
                } catch (e) {
                  Alert.alert(
                    'Save Error',
                    "There was an error in saving the photo",
                    {
                        text:"Cancel"
                    }
                  )
                }
            
            }
            
        }
    };
    return ( 
        <Camera style={styles.camera} ref={(camera)=>(cameraRef.current = camera)} type={CameraType.front} onCameraReady={()=>setReadyCamera(true)}>
            {readyCamera &&(
            <View style={styles.cameraButtons}>
                <TouchableOpacity style={styles.snapButton} onPress={takePicture}>
                    <View style={styles.innerSnapButton}>

                    </View>
                </TouchableOpacity>
            </View>)}
        </Camera>
     );
};
 
const styles = StyleSheet.create({
    camera:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end"
    },
    cameraButtons:{
        padding: 20,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    },
    snapButton:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    innerSnapButton:{
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor:"black",
        borderStyle:"solid",
        zIndex: 3
    }
})

export default CameraScreen;