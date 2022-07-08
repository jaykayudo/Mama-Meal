import ImageBackdrop from "../components/ImageBackdrop";
import AccountContainer from "../components/accountContainer";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Title, ActivityIndicator } from "react-native-paper";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { color } from "../../../utils/colors";
const CreateAccount = ({navigation}) => {
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const authContext = useContext(AuthContext);
    return ( 
        <ImageBackdrop>
            <AccountContainer style={{minWidth: 300}}>
                <Title style={styles.title}>Create Account</Title>
                <TextInput
                    label="Email"
                    value={emailText}
                    onChangeText={text => setEmailText(text)}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    />
                <TextInput 
                label="Password"
                value={passwordText}
                onChangeText={text => setPasswordText(text)}
                secureTextEntry={true}
                style={styles.input}
                textContentType="password"

                />
                <Text style={styles.error} >{authContext.error}</Text>
                {authContext.isLoading?(
                    <ActivityIndicator animating={true} color={color.ui.success} />
                ):(
                <Button icon={"lock-open"} color={color.ui.success} mode="contained" onPress={()=>(authContext.onLogin(emailText,passwordText))}>
                    Register
                </Button>
                )}
            </AccountContainer>
            <Button color={color.ui.brand} style={styles.backBtn} mode="contained" onPress={()=>navigation.goBack()}>
                Back
            </Button>
        </ImageBackdrop>
     );
}
const styles = StyleSheet.create({
    buttonContainer:{
      marginBottom: 16,
      justifyContent: "space-between"
    },
    input:{maxHeight: 50, justifyContent:"center", marginBottom: 16},
    title:{textAlign:"center",marginBottom:14},
    error:{color:color.text.error},
    backBtn:{
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    }
    
})
export default CreateAccount;