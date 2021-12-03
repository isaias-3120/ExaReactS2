import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />
        </Stack.Navigator>

    )
}