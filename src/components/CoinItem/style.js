import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop:50,  
       },
    title:{
      color:"white",
      fontSize:16,
      fontWeight:"bold",
      marginBottom:5,
   
    },
    text:{
      color:"white",
      marginRight:5,
  
    },
    coincontainer:{
      flexDirection:"row",
      borderBottomWidth:StyleSheet.hairlineWidth,
      borderBottomColor:"grey",
      padding:15,
      
    },
    rank:{
      fontWeight:"bold",
      color:"white",
  
    },
    rankContainer:{
      backgroundColor:"#585858",
      paddingHorizontal:5,
      borderRadius:5,
      marginRight:5,
    },
  });
  
  export default styles;