import React from "react";
import { Text, View ,Image ,Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

import { useNavigation } from "@react-navigation/native";

const CoinItem = ({marketcoin})=>{
    const{id,name,current_price,market_cap,market_cap_rank,price_change_percentage_24h,symbol,image}=marketcoin;

    const normalizemarketcap=(marketcap)=>{
        if(marketcap>1000000000000){
            return `${(marketcap/1000000000000).toFixed(2)} T`
        }else if(marketcap>1000000000){
            return `${(marketcap/1000000000).toFixed(2)} B`
        }else{
            return marketcap
        }
    }

    
    const percentagecolor=price_change_percentage_24h<0?'#ea3943':'#16c784'

    const navigation=useNavigation();
    return(
      <Pressable style={styles.coincontainer} onPress={()=> navigation.navigate("CoinDetails",{coinid:id})}>
      <Image source={{uri:image}} style={{ height:30,width:30,marginRight:20,alignSelf:'center'}}/>
      <View>
      <Text style={styles.title}>{name}</Text>
      <View style={{flexDirection:"row"}}>
        <View style={styles.rankContainer}>
      <Text style={styles.rank}>{market_cap_rank}</Text>
      </View>
      <Text style={styles.text}>{symbol.toUpperCase()}</Text>
      <AntDesign name={price_change_percentage_24h<0?'caretdown':'caretup'} size={14} color={percentagecolor} style={{alignSelf:'center',marginRight:5}}/>
      <Text style={{color:percentagecolor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
      </View>
      </View>
      <View style={{marginLeft:"auto",alignItems:"flex-end"}}>
      <Text style={styles.title}>{current_price}</Text>
      <Text style={{color:"white"}}>MCap {normalizemarketcap(market_cap)}</Text>
      </View>
      
      </Pressable>
    );
};

export default CoinItem;