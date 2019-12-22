import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

const TextScreen =()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    return(
        <View>
            <Text>Enter Name</Text>
            <TextInput
                value={username}
                onChangeText={(newValue)=>setUsername(newValue)}
                style={style.input}
            />
            <Text>Enter Password</Text>
            <TextInput
                value={password}
                onChangeText={newValue=>setPassword(newValue)}
                autoCapitalize='none'
                autoCorrect={false}
                style={style.input}
            />
            {password.length<6?<Text style={{color:'red'}}>Password needs to be atleast of 6 characters</Text>:null}
        </View>
    )
}

const style=StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'black',
        margin:5
    }
});

export default TextScreen;
