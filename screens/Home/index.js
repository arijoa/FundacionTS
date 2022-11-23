import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from './styles';
import FundacionFlatList from '../../components/FundacionFlatList' 
import fundacionServices from '../../services/fundaciones';
import { useEffect, useState } from 'react';

export default function Home() {
 
  const[fundaciones, setFundaciones] = useState([])

  useEffect(()=>{
 fundacionServices.getfundacion().then(data=> {
  setFundaciones(data)
 })
  },[])
  
  
  return (
        <View style={styles.container}>
         
            <View>  
             <FundacionFlatList fundaciones={fundaciones} /> 
            {/* <FundacionScrollView fundaciones={fundaciones} /> */}
            </View>
        
            <StatusBar style="auto" />
        
      </View>
      
    );
  }
  
