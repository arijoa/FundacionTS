import { View } from "react-native"
import Fundacion from "../../components/fundacion"
import styles from "./styles"

const Details = ({navigation, route})=>{
   const { fundacion } = route.params;
   console.log("aaaaa", route.params)
  return(
        <View style={styles.container}>
          {
            <Fundacion fundacion={fundacion}/>
          }
        
     </View>
    )

}
export default Details