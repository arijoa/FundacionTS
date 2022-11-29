import { Button, SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text } from "react-native"
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Si saco la pantalla de Screens importar > import Login from './screens/Login'

  const StartScreen = ({navigation}) => {
    return (

        <View style={styles.container}>
        <Image source={require('../../assets/ts.png')} />
        <Button 
            color='#82E0AA'
            title='Ingresar'
          onPress={() => navigation.navigate('Login')    }
      
        />
      </View>
    )
  }
 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

  export default StartScreen;