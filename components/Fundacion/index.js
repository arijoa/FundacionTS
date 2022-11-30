
import{View, Text, Image} from "react-native"
import { Card } from '@rneui/themed';
import Styles from './Styles'
import { Icon } from "@rneui/base";


const Fundacion = ({fundacion, showAll, isFavorite, toggleFavorite})=> {
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
        {
          showAll ?
          <>
          <View style={Styles.favorites}>
            <Icon
              type="material"
              name="favorite"
              onPress={()=> toggleFavorite(fundacion)}
              color={isFavorite?"#FF0000" :"#B5B2B2"}
              size={35}
            />
          </View>
          <Text h2>
           Cvu: {fundacion.cvu}
          </Text>
          </>
          :
          <></>
        }
        </Card>
    </View>
)
}
export default Fundacion