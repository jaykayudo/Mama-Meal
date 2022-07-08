import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import ImageBackdrop from "../components/ImageBackdrop";
import AccountContainer from "../components/accountContainer";
import LottieView from "lottie-react-native";
import { color } from "../../../utils/colors";

const AuthHome = ({navigation}) => {
    return (
        <ImageBackdrop>
            <View style={styles.anim}>
                <LottieView source={require('../../../../assets/watermelon.json')} autoPlay key={'animation'} resizeMode="cover" loop/>
            </View>
            <AccountContainer>
                <View style={styles.buttonContainer} >
                    <Button icon="lock-open-outline" mode="contained" color={color.ui.success} onPress={()=>(navigation.navigate('Login'))}>
                        Login
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button icon="lock-open-outline" mode="contained" color={color.ui.brand} onPress={()=>(navigation.navigate('Register'))}>
                        Create Account
                    </Button>
                </View>
                
            </AccountContainer>
        </ImageBackdrop>
         );
}
const styles = StyleSheet.create({
    buttonContainer:{
      marginBottom: 16,
      justifyContent: "space-between"
    },
    anim:{
        position:"absolute",
        top:30,
        width: 350,
        height: 350
    }
})
export default AuthHome;


