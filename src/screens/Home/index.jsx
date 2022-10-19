import React from "react";
import { FlatList } from 'react-native';
import CoinItem from '../../components/CoinItem/index';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const Home=()=>{
    return(
        <FlatList data={cryptocurrencies}
        renderItem={({item})=><CoinItem marketcoin={item}/>}/>
    );
}

export default Home;