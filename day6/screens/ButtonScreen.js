import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
    let counter =1;
    return(

        <View>
        <Text style={styles.textStyle}>Button Screen</Text>
        <Button
            title='Click Me'
            color="purple"
            onPress={()=> console.log( counter+=2)}
        />
        <Button
            title='Click Me'
            color="blue"
            onPress={()=> console.log( counter+=1)}
        />
        <TouchableOpacity  style={styles.touchableBtn}  onPress={()=> console.log('Touchable Element Clicked', counter++)}>
           
            <Text style={styles.textBtn}>Click Touchable Element</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    touchableBtn:{
        backgroundColor:'purple',
        marginVertical:15,
        paddingVertical:20,
        marginHorizontal:20
    },
    textBtn:{
        color:'white',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    }
});

export default ButtonScreen;
