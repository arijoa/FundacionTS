import { Button, SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useContext, useEffect } from "react";
import AuthService from "../../services/login";
import AuthContext from "../../services/AuthContext";

const Login = () => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '768824412613-c6rt0pm4h5ecoqmeblabt23jnkfs0jlr.apps.googleusercontent.com'
    });

    const { setAuthenticationData } = useContext(AuthContext)

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            //console.log("authentication", authentication);

            AuthService.login(authentication.accessToken).then(data => {
                setAuthenticationData(data)
            })


        }
    }, [response]);


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/ts.png')} />
            <Text style={styles.title}> ¡Bienvenido! </Text>
            <Text style={styles.title2}> Amamos verte de nuevo por aquí  ♥ </Text>
            <TouchableOpacity
                onPress={() => {
                    promptAsync()
                }}
            >
                <View >
                    
                    <Image style={styles.button} source={require('../../assets/google_signin.png')} />
                     
                </View>
            </TouchableOpacity>
        </SafeAreaView>

    )


}


const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 30,
        color: '#2C3E50',
        marginBottom: 20,
    },
    title2:{
        fontFamily: 'NotoSans-Thin',
        color: '#566573',
        fontSize: 15,
        marginBottom:10,
    },
    logo:{
        marginBottom: 40,
        marginTop: 40,
        width: '70%',
        height: '30%',
        
    },
    button:{
        marginTop:50,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});

export default Login