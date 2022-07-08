import {List, Avatar, Portal, Modal, Provider, Button} from 'react-native-paper'
import { View, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useState } from 'react';
import { fonts } from '../../../utils/fonts';
import { color } from '../../../utils/colors';
const SettingsScreen = ({navigation}) => {
        const [visible, setVisible] = useState(false);
        const authContext = useContext(AuthContext)
        const showModal = () => setVisible(true);
        const hideModal = () => setVisible(false);
    return ( 
    <Provider>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={styles.modalStyle} contentContainerStyle={styles.modalContentStyle}>
            <Text style={styles.modalText}>Are you Sure that you want to Logout?</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={authContext.onLogout} mode="contained" color={color.ui.error}>
                    Yes
                </Button>
                <Button onPress={hideModal} mode="contained" color={color.ui.secondary}>
                    No
                </Button>
            </View>
            </Modal>
      </Portal>
    <View style={styles.profileImg}>
        <Avatar.Icon size={150} icon="account" />
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
    userText:{marginTop: 5, fontFamily: fonts.body},
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    buttons:{
        
    }
    
})

export default SettingsScreen;