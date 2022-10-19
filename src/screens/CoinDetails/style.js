import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
containerheader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
},
innerContainer:{
    flexDirection:'row',
    alignItems:"center",
},
symbolstyle:{
    color:"white",
    marginHorizontal:5,
    fontWeight:'bold',
    fontSize:17,
},
rankcontainer:{
backgroundColor:'#585858',
padding:5,
paddingVertical:2,
borderRadius:2,
},
currentprice:{
    color:'white',fontSize:30,fontWeight:'600',letterSpacing:1
},
name:{
    color:'white',fontSize:15
},
pricecontainer:{
    padding:15,flexDirection:'row',justifyContent:"space-between",alignItems:'center',
},
pricechange:{
    color:"white",fontSize:17,fontWeight:'500',
},
input:{
    flex:1,
    width:130,
    height:40,
    margin:12,
    borderBottomWidth:1,
    borderBottomColor:'white',
    padding:10,
    fontSize:16,
    color:'white',
},
});

export default styles;