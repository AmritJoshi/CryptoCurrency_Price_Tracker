import React from "react";
import { View ,Text ,Image ,Pressable} from "react-native";
import { Ionicons ,EvilIcons } from '@expo/vector-icons';
import styles from '../style';

import { useNavigation } from "@react-navigation/native";
const Coindetailheader=(props)=>{
    const{image,symbol,marketcaprank}=props;
    const navigation=useNavigation();
return(
    
    <View style={styles.containerheader}>
            <Ionicons name="chevron-back" size={24} color="white" onPress={()=>navigation.goBack()}/>
            <View style={styles.innerContainer}>
            <Image source={{uri:image}} style={{height:30,width:30}}/>
            <Text style={styles.symbolstyle}>{symbol}</Text>
            <View style={styles.rankcontainer}>
            <Text style={{color:"white",fontWeight:'bold',fontSize:15}}>#{marketcaprank}</Text>
            </View>
            </View>
            <EvilIcons name="user" size={24} color="white" />
        </View>

);

}

export default Coindetailheader;