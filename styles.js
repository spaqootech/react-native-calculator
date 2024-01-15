import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      padding:10,
      backgroundColor:'salmon',
      justifyContent:'center'
    },
    textOne:{
      fontSize:40,
      padding:10
    },
    calculator:{
        gap:5
    },input:{
        fontSize:30,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        height:100,
        borderRadius:5
    },
    buttonText:{
fontSize:40,
color:'white'
    },
    button:{
        backgroundColor:'dodgerblue',
        justifyContent:'center',
        alignItems:'center',
        width:85,
        color:'white',
        height:100,
        borderRadius:5

    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
  });

export default styles;