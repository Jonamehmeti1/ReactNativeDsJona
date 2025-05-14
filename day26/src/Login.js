import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const Login=()=>{
    const handleLogin = async () =>{ 
        try {

       
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST', 
        header: {'Consent-Type': 'application/json'},
        body:JSON.stringify({
            username:username,
            password:password
        }),
        credentials:'omit'
    });

    const data= await response.json();
    console.log(data);
    if(data?.token){
        navigator.navigate('Welcome', {
            username:username
        });
    }else{
        alert(data.message || 'Login failed. Please check your credentials')
    }
}catch(err) {
  console.log('Login error:', err);
  alert('An error has occurred ')
 }
 };
 return(
    <View style={StyleSheet.container}>
      <Text style={style.title}>Fake api Login</Text>
      <TextInput
      style={StyleSheet.input}
      placeholder='Username'
      autoCapitalize='none'
      value={username}
      onChangeText={test=>setUsername(test)}
      /> 
      <TextInput
      style={StyleSheet.input}
      placeholder='Password'
      autoCapitalize='none'
      value={password}
      onChangeText={test=>setPassword(test)}
      /> 
      <Button title="Login" onPress={handle}/>
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