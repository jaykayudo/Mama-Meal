import ImageBackdrop from "../components/ImageBackdrop";
import AccountContainer from "../components/accountContainer";
import { Text, StyleSheet } from "react-native";
import { Title, TextInput, Button, ActivityIndicator } from "react-native-paper";
import React,{useState, useContext} from "react";
import { AuthContext } from "../../../context/AuthContext";
import { color } from "../../../utils/colors";
const Login = ({navigation}) => {
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const authContext = useContext(AuthContext);
    return ( 
        <ImageBackdrop>
            <AccountContainer style={{minWidth: 300}}>
                <Title style={styles.title}>Login</Title>
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
                textContentType="password"
                style={styles.input}
                secure
                />
                <Text style={styles.error} >{authContext.error}</Text>
                {authContext.isLoading?(
                    <ActivityIndicator animating={true} color={color.ui.success} />
                ):(
                <Button icon={"lock"} color={color.ui.success} mode="contained" onPress={()=>(authContext.onLogin(emailText,passwordText))}>
                    Login
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
    button:{
      marginBottom: 16,
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
export default Login;