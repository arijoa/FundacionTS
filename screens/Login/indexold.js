import { SafeAreaView } from "react-native-safe-area-context"
import { Button, View, Text }  from "react-native"
import { useContext, useEffect } from "react"
import * as Google from 'expo-auth-session/providers/google';
import AuthServices from '../../services/login'
import AuthContext from "../../services/AuthContext";


const Login= () =>{

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '768824412613-c6rt0pm4h5ecoqmeblabt23jnkfs0jlr.apps.googleusercontent.com' 
       
      });

      const{ setAuthenticationData } = useContext(AuthContext)
    
      useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          AuthServices.login(authentication.accessToken).then(data=>{
            console.log(data);
            setAuthenticationData(data)
          })
        }
      }, [response]);

    return( 
        <SafeAreaView>
            <View>
                
                    <Text>Bienvenido!</Text>
                    <Button
                        title="Login"
                        onPress={() => { promptAsync() }}
                        />
                
            </View>
        </SafeAreaView>
        )
   
}
export default Login