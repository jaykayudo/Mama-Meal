import {List, Avatar, Portal, Modal, Provider, Button} from 'react-native-paper'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { fonts } from '../../../utils/fonts';
import { color } from '../../../utils/colors';
const SettingsScreen = ({navigation}) => {
        const [visible, setVisible] = useState(false);
        const [picture, setPicture] = useState(null)
        const authContext = useContext(AuthContext)
        const showModal = () => setVisible(true);
        const hideModal = () => setVisible(false);
    const getProfilePhoto  = async(user)=>{
        try{
            const photo = await AsyncStorage.getItem(`${user}-photo`)
            if(photo)
                setPicture(photo)
            
                
        }
        catch(e){

        }
    }
    useFocusEffect(()=>{
        getProfilePhoto(authContext.user.email)
    })
    return ( 
    <Provider>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={styles.modalStyle} contentContainerStyle={styles.modalContentStyle}>
            <Text style={styles.modalText}>Are you Sure that you want to Logout?</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={authContext.onLogout} mode="contained" color={color.ui.error}>
                    Yes
                </Button>
                <Button onPress={hideModal} mode="outlined" color={color.ui.secondary}>
                    No
                </Button>
            </View>
            </Modal>
      </Portal>
    <View style={styles.profileImg}>
        <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
            {!picture?(<><Avatar.Icon size={150} icon="account" /><Text style={{fontSize: 12}}>Click Avatar to add image</Text></>):(
                <Avatar.Image size={150} source={{uri:`${picture}`}} />
            )}
        </TouchableOpacity>
        <Text style={styles.userText}>{authContext.user.email}</Text>
    </View>
    <View>
        <List.Item
    title="Favourites"
    description="View your favourite restaurants"
    left={props => <List.Icon {...props} icon="heart" />}
  />
   <List.Item
    title="Logout"
    left={props => <List.Icon {...props} icon="logout" />}
    onPress={showModal}
  />
  </View>
    </Provider> );
}

const styles = StyleSheet.create({
    listContainer:{
        marginTop: 10
    },
    profileImg:{
        justifyContent:"center",
        alignItems:"center",
        padding: 15
    },
    modalContentStyle:{
        backgroundColor: color.bg.primary,
        padding: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: 200,
        justifyContent:'space-around'

    },
    modalStyle:{
        justifyContent: 'flex-end'
    },
    modalText:{
        fontFamily: fonts.text,
        textAlign:"center",
        textTransform:"capitalize"
    },
    userText:{marginTop: 5, fontFamily: fonts.body, fontSize: 20},
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    buttons:{
        
    }
    
})

export default SettingsScreen;