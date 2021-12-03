import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native'
import {Header,Card} from 'react-native-elements';
import {CineContext} from '../Context/CineContext';


const HomeScreen = ({navigation}) => {
    const {Compra,setCompra,cartelera,agregar} = useContext(CineContext);
    return (
        <ScrollView>
            <Header
                placement="center"
                centerComponent={{ text: 'Cinepolis'}}
                backgroundColor='#2271b3'
            />
            <View style={styles.container}>
                {
                    cartelera.map((peli,i)=>{
                        return(
                            <Card key={i} containerStyle={{
                                width: '85%',
                            }}>
                                <Card.Title>{peli.nombre}</Card.Title> 
                                <Card.Divider/>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <View style ={{justifyContent:'center', alignItems:'center'}}>
                                        <Image source={{uri: peli.url}} 
                                        style={styles.poster} />
                                    </View>
                                    <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems:'center'}}>
                                        <Text>{peli.clasificacion}</Text>
                                        <Text>{peli.idioma}</Text>
                                        {
                                            peli.horarios.map((pelih,i)=>{
                                                return(
                                                    <View style={{ padding: 8}}>
                                                        <Button
                                                            key={i}
                                                            title={pelih}
                                                            onPress={
                                                                ()=> { agregar(peli,pelih); navigation.navigate('DetailsScreen');}
                                                            }
                                                        />
                                                    </View>

                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </Card>
                        );
                    })
                }
            </View>           
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    poster: {
        minWidth: 100, 
        minHeight: 160,
    }
    //`${peli.url}`

});
  