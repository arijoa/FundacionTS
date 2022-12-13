import{View, Text, Image,Button} from "react-native"
import { Card } from '@rneui/themed';
import Styles from './Styles'
import { Icon } from "@rneui/base";
import * as Clipboard from 'expo-clipboard';

const copyToClipboard = async () => {
  await Clipboard.setStringAsync(cvuCopiado);
};

const Fundacion = ({fundacion, showAll, isFavorite, toggleFavorite})=> {
  cvuCopiado=fundacion.cvu
return(
    <View>
       <Card containerStyle={{ marginTop: 15 }}>
          {/* <Card.Title>Fundacion</Card.Title> */}
          {/* <Card.Divider /> */}
           <Image  
                  style={Styles.image}
                  resizeMode="cover"
                  source={{uri: fundacion.avatar}} /> 
          <Text style={Styles.title2}>
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
          <Text style={Styles.title2}>
           Cvu: {fundacion.cvu}
           <Button title="Copiar CVU al portapapeles" onPress={copyToClipboard} />
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