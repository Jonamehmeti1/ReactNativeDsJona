import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Login=()=>{
    const navigation=useNavigation();
        const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const handleLogin = async () =>{ 
        try {

       
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            username:username,
            password:password
        }),
        credentials:'omit'
    });

    const data= await response.json();
    console.log(data);
    if (data && data.refreshToken) {
        navigator.navigate('Welcome', {
            username:username
        });
    }else{
        alert(data.message || 'Login failed. Please check your credentials')
    }
}catch(error) {
  console.log('Login error:', error);
  alert('An error has occurred ')
 }
 };
 return(
    <View style={styles.container}>
            <Text style={styles.title}>FAKE API Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize='none'
                value={username}
                onChangeText={test=>setUsername(test)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize='none'
                secureTextEntry
                value={password}
                onChangeText={test=>setPassword(test)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
 )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor: '#fff',
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#aaa',
        padding:10,
        marginVertical:10,
        borderRadius:5,
    },
    error:{
        color:'red',
        marginBottom:10,
        textAlign:'center'
    },
})
export default Login 