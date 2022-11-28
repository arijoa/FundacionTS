import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Fundacion from "../../components/Fundacion"
import styles from "./styles"
import Map from "../../components/Map";

const Details = ({navigation, route})=>{
   const { fundacion } = route.params;
    console.log(fundacion)
 
   return(
       <SafeAreaView style={styles.container}>
       <View>
          {
            <View>
            <Fundacion fundacion={fundacion} showAll={true}/>
            </View>
          }
          {
            <View>
            <Map fundacion={fundacion}/>
            </View>
          } 
        
     </View>
     </SafeAreaView>
    )

}
export default Details