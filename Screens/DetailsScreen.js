import React, {useContext} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Header,Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CineContext} from '../Context/CineContext';


const DetailsScreen = ({navigation}) => {
    const {Compra, eliminarCompra,calcular,comprarT} = useContext(CineContext);

    return (
        <View style={styles.c2}>
            <Header
                centerComponent={{ text: 'Carrito'}}
            />
            <View style={styles.c1}>
                    <Text>{Compra.nombre}({Compra.idioma})</Text>
                    <Text>Hora: {Compra.horario}</Text>
                    <View style={styles.itp}>
                        <Text>Cantidad: </Text>
                            <TextInput
                            onChangeText={(canti)=>{calcular(Compra, canti)}}
                            maxLength={2}
                            placeholder="..."
                            keyboardType='numeric'
                            />
                    </View>
                    <Text>Total: ${Compra.total}</Text>
                <View>
                    <Button
                        buttonStyle={styles.button1} 
                        title="CANCELAR"
                        onPress={
                            ()=>(
                                eliminarCompra(),
                                navigation.goBack()
                        )}
                    />
                </View>
                <View>
                    <Button 
                        buttonStyle={styles.button2}
                        title="COMPRAR"
                        onPress={
                            ()=>{
                                comprarT(Compra),
                                navigation.goBack()
                        }}
                    />  
                </View>
    
            </View>
            
        </View>
    );
}

export default DetailsScreen
const styles = StyleSheet.create({
  c1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  c2: {
    flex: 1,
  },
  itp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginBottom: 4,
    backgroundColor: '#ff0000',
  },
  button2: {
    backgroundColor: '#008000',
    marginBottom: 4,
  },

});
  