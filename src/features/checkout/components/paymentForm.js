import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import {LiteCreditCardInput} from 'react-native-credit-card-input'
import {TextInput, Portal, Modal, Provider, Button} from 'react-native-paper'
import { AuthContext } from "../../../context/AuthContext";
import { color } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";
import { CheckoutContext } from "../../../context/CheckoutContext";

const PaymentForm = ({navigation}) => {
    const authContext  = useContext(AuthContext)
    const [visible, setVisible] = useState(false);
    const checkoutContext = useContext(CheckoutContext)
    const [email, setEmail] = useState(authContext.user.email)
    const [emailError, setEmailError] = useState(null)
    const [cardDetail, setCardDetails] = useState(null)
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const clearCart = ()=>{
        checkoutContext.clearContext()
        hideModal()
    }
    const pay =()=>{
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if(!cardDetail || !cardDetail.valid){
            navigation.navigate("CheckoutFailure")
        }else if(!email.match(emailFormat)){
            setEmailError("Enter a valid email")
        }
        else{
            
            navigation.navigate("CheckoutSuccess")
        }
    }
    return (
        <>
        <Provider>
            <Portal>
            <Modal visible={visible} onDismiss={hideModal} style={styles.modalStyle} contentContainerStyle={styles.modalContentStyle}>
            <Text style={styles.modalText}>Are you Sure that you want to clear Cart?</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={clearCart} mode="contained" color={color.ui.error}>
                    Yes
                </Button>
                <Button onPress={hideModal} mode="outlined" color={color.ui.secondary}>
                    No
                </Button>
            </View>
            </Modal>
        </Portal>
        <View style={styles.flexContainer}>
            <TextInput placeholder="Email" value={email} style={styles.emailInput} onChangeText={(text)=>setEmail(text)}  />
            <Text style={{color:color.ui.error}}>{emailError}</Text>
            <View style={{marginTop: 10}}>
                <LiteCreditCardInput onChange={(form)=>setCardDetails(form)} />
            </View>
            
            <Button
            icon={'cash'}
            color={color.ui.success}
            mode={"contained"}
            style={styles.payButton}
            onPress={pay}
            >
                Pay
            </Button>
            <Button
            icon={'delete'}
            color={color.ui.error}
            mode={"outlined"}
            style={styles.payButton}
            onPress={showModal}
            
            >
                Clear Cart
            </Button>
            
        </View>
        </Provider>
        </>
    );
}
const styles = StyleSheet.create({
    flexContainer:{
        padding: 20,
        justifyContent:"center"
    },
    payButton:{
        width: 200,
        marginTop: 10,
        alignSelf:"center"
    },
    clearButton:{
        width: 200,
        marginTop: 10,
        alignSelf:"center"
    },
    emailInput:{
        height: 40,
        justifyContent:"center"
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
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
})

export default PaymentForm;