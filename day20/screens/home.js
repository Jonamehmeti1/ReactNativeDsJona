import React from "react";
import {View, Text, Stylesheet, Image, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native'
const home=()=>{

}
export default home

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    sliderContainer:{
        width:"100%",
        height:200,
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"lightgrey"
    },
    imgItem:{
        width:"100%",
        height:"100%"
    },
    item:{
        flex:1,
        justifyContent:"center"
    },
    iconsContainer:{
        width:"90%",
        alignSelf:"center",
        marginTop:30,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    tittle:{
        marginTop:35,
        fontSize:20,
        marginBottom:16,
    },
    productsContainer:{
        marginHorizontal:20
    },
    btn:{
        backgroundColor:"#22D4FF",
        height:50,
        borderRadius:8,
        justifyContent:"center",
        marginBottom:20
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    },
    textStyle:{
        fontSize:15,
        marginBottom:20
    }
})