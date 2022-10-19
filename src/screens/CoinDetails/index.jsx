import React ,{useState , useEffect} from "react";
import { View  ,Text, Dimensions , TextInput, ActivityIndicator} from "react-native";
import coindetail from '../../../assets/data/crypto.json'
import Coindetailheader from "./coindetailcomponents/coindetailheader.jsx";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import {getDetailedCoinData} from '../../services/requests'


const CoinDetails=()=>{
    const [coin,setCoin]=useState(null);
    const [loding,setLoding]=useState(false);


    const [coinvalue,setcoinvalue]=useState("1");
    const [usdvalue,setusdvalue]=useState("");
    
    const changeUsdValue=(value)=>{
        setusdvalue(value)
        const floatvalue=parseFloat(value) || 0
        setcoinvalue(((floatvalue/current_price.usd).toFixed(8)).toString())
    }

    const changeCoinValue=(value)=>{
        setcoinvalue(value)
        const floatvalue=parseFloat(value) ||0

        setusdvalue((floatvalue*current_price.usd).toString())
    }

    const route=useRoute();
    const {params: {coinid}}=route;
    

    const fetchCoinData=async()=>{
        setLoding(true);
        const fetchedCoinData=await getDetailedCoinData(coinid)
        setCoin(fetchedCoinData);
        setusdvalue(fetchedCoinData.market_data.current_price.usd.toString())
        setLoding(false);
    }
    useEffect(()=>{
        fetchCoinData()
    },[])

    if(loding || !coin){
        return <ActivityIndicator size="large" />
    }
    const {image:{small},symbol,name
    ,market_data:{market_cap_rank,current_price,price_change_percentage_24h}}=coin;
    
    const percentagecolor=price_change_percentage_24h<0?'#ea3943':'#16c784'
    return(
        <View style={{paddingHorizontal:10}}>
            <Coindetailheader image={small} symbol={symbol} marketcaprank={market_cap_rank}/>
            <View style={styles.pricecontainer}>
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.currentprice}>${current_price.usd}</Text>
            </View>
            <View style={{backgroundColor:percentagecolor, padding:5,borderRadius:5 ,flexDirection:'row'}}>
            <AntDesign name={price_change_percentage_24h<0?'caretdown':'caretup'} size={14} color={'white'} style={{alignSelf:'center',marginRight:5}}/>
            <Text style={styles.pricechange}>{price_change_percentage_24h.toFixed(2)}</Text>
            </View>
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:'row',flex:1}}>
            <Text style={{color:'white',alignSelf:'center'} }>{symbol.toUpperCase()}</Text>
            <TextInput style={styles.input} value={coinvalue.toString()} keyboardType="numeric" onChangeText={changeCoinValue}/>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
            <Text style={{color:'white',alignSelf:'center'}}>USD</Text>
            <TextInput style={styles.input} value={usdvalue.toString()} keyboardType="numeric" onChangeText={changeUsdValue}/>
            </View>
            </View>

        </View>
            );
}


export default CoinDetails;