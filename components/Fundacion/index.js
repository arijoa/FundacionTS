
import{View, Text, Image} from "react-native"
import { Card } from '@rneui/themed';
import Styles from './Styles'

const Fundacion = ({fundacion})=> {
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
           Cvu: {fundacion.cvu}
          </Text>
          
        </Card>
    </View>
)
}
export default Fundacion