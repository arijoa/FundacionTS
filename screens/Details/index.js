import { View } from "react-native"
import Styles from "./styles"

const Details = ({fundacion})=>{
    return(
        <View>
        <Card containerStyle={{ marginTop: 15 }}>
           <Card.Title>Fundaciones</Card.Title>
           <Card.Divider />
           <Image  
                   style={Styles.image}
                   resizeMode="cover"
                   source={{uri: fundacion.avatar}} />
           <Text h1>
             Nombre: {fundacion.name}
           </Text>
           <Text h2>
            Cbu: {fundacion.cvu}
           </Text>
           
         </Card>
     </View>
    )

}
export default Details