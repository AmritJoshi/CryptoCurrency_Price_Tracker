import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../../screens/Home";
import CoinDetails from "../../screens/CoinDetails";

const Stack=createNativeStackNavigator();

const Navigation=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"CoinDetails"} component={CoinDetails}/>
        </Stack.Navigator>
    )
}

export default Navigation